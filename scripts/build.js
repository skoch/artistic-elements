import fs from 'fs';
import chalk from 'chalk';
import esbuild from 'esbuild';
import { globby } from 'globby';
import { deleteSync } from 'del';
import { execSync } from 'child_process';
import commandLineArgs from 'command-line-args';

const { bundle, dir, types } = commandLineArgs([
  { name: 'bundle', type: Boolean },
  { name: 'dir', type: String, defaultValue: 'dist' },
  { name: 'types', type: Boolean },
]);

const outdir = dir;

// Clear build directory
deleteSync(outdir);
fs.mkdirSync(outdir, { recursive: true });

(async () => {
  try {
    execSync(`node scripts/make-metadata.js --outdir "${outdir}"`, {
      stdio: 'inherit',
    });
    execSync(`node scripts/make-react.js --outdir "${outdir}"`, {
      stdio: 'inherit',
    });

    if (types) {
      console.log(chalk.yellow('Running the TypeScript compiler...'));
      execSync(`tsc --outdir "${outdir}"`, {
        stdio: 'inherit',
      });
    }
  } catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
  }

  const alwaysExternal = ['@lit-labs/react', 'react'];
  const buildResult = await esbuild
    .build({
      format: 'esm',
      target: 'es2017',
      entryPoints: [
        // The whole shebang
        './src/index.ts',
        // Components
        ...(await globby('./src/artistic/**/*.ts')),
        // React wrappers
        ...(await globby('./src/react/**/*.ts')),
      ],
      outdir,
      chunkNames: 'chunks/[name].[hash]',
      // incremental: serve,
      incremental: false,
      bundle: true,
      //
      // We don't bundle certain dependencies in the unbundled build. This ensures we ship bare module specifiers,
      // allowing end users to better optimize when using a bundler. (Only packages that ship ESM can be external.)
      //
      // We never bundle React or @lit-labs/react though!
      //
      external: bundle ? alwaysExternal : [...alwaysExternal, 'lit'],
      splitting: true,
      plugins: [],
    })
    .catch(err => {
      console.error(chalk.red(err));
      process.exit(1);
    });

  console.log(chalk.green(`The build has been generated at ${outdir} 📦\n`));

  process.on('SIGTERM', () => buildResult.rebuild.dispose());
})();

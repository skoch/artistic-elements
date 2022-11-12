import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import prettier from 'prettier';
import { deleteSync } from 'del';
import commandLineArgs from 'command-line-args';

import { getAllComponents } from './shared.js';
import prettierConfig from '../prettier.config.cjs';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });

const reactDir = path.join('./src/react');

// Clear react directory
deleteSync(reactDir);
fs.mkdirSync(reactDir, { recursive: true });

// Fetch component metadata
const metadata = JSON.parse(
  fs.readFileSync(path.join(outdir, 'custom-elements.json'), 'utf8'),
);

// Wrap components
console.log(chalk.yellow('Wrapping components for React...'));

const components = getAllComponents(metadata);
const index = [];

components.map(component => {
  const tagWithoutPrefix = component.tagName.replace(/^artistic-/, '');
  // const componentDir = path.join(reactDir, tagWithoutPrefix);
  // const componentFile = path.join(componentDir, 'index.ts');
  const componentFile = path.join(reactDir, `${tagWithoutPrefix}.ts`);
  const importPath = component.modulePath
    .replace(/^src\//, '')
    .replace(/\.ts$/, '');
  const events = (component.events || [])
    .map(event => `${event.reactName}: '${event.name}'`)
    .join(',\n');

  // fs.mkdirSync(componentDir, { recursive: true });

  const source = prettier.format(
    `
      import * as React from 'react';
      import { createComponent } from '@lit-labs/react';
      import { ${component.name} } from '../${importPath}';

      export default createComponent({
        tagName: '${component.tagName}',
        elementClass: ${component.name},
        react: React,
        events: {
          ${events}
        },
      });
    `,
    Object.assign(prettierConfig, {
      parser: 'babel-ts',
    }),
  );

  index.push(
    `export { default as ${component.name} } from './${tagWithoutPrefix}';`,
  );

  fs.writeFileSync(componentFile, source, 'utf8');
});

// Generate the index file
fs.writeFileSync(path.join(reactDir, 'index.ts'), index.join('\n'), 'utf8');

console.log(chalk.cyan(`\nComponents have been wrapped for React! 📦\n`));

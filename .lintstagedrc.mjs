import path from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write --ignore-unknown ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

const lintStagedResult = {
  '*.{js,jsx,ts,tsx}': [
    buildEslintCommand,
    buildPrettierCommand,
    'prettier --write --ignore-unknown .',
  ],
  '!*.{js,jsx,ts,tsx}': [
    buildPrettierCommand,
    'prettier --write --ignore-unknown .',
  ],
};

export default lintStagedResult;

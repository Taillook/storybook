import packageJson from '../../package.json';

export default {
  packageJson,
  framework: 'polymer',
  frameworkPresets: [require.resolve('./framework-preset-polymer.js')],
};

const config = require('./elsint-config-mongosh');

module.exports = {
  root: true,
  extends: [config],
  parserOptions: {
    tsconfigRootDir: config.fixCygwinPath(__dirname),
    project: ['./tsconfig-lint.json'],
  },
};

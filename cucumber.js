module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'features/support/*.ts',
      'features/**/step_definitions/*.ts'
    ],
    paths: ['features/**/*.feature'],
    format: [
      'json:report/report.json',
      'progress-bar',
      '@cucumber/pretty-formatter'
      // ['allure-playwright', 'output-dir=./allure-results']
    ]
  }
};
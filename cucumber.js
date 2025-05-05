module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'step_definitions/*.ts',
      'support/*.ts'
    ],
    format: [
      'json:report/report.json',
      'progress-bar',
      '@cucumber/pretty-formatter'
    ]
  }
}
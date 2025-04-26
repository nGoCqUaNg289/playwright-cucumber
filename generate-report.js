const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const reportDir = path.join(__dirname, 'report');
const jsonReportPath = path.join(reportDir, 'report.json');

// Kiểm tra và tạo thư mục report nếu chưa tồn tại
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

// Kiểm tra file report.json có tồn tại không
if (!fs.existsSync(jsonReportPath)) {
  console.error('❌ Error: File report.json not found. Please run "npm test" first.');
  process.exit(1);
}

const options = {
  theme: 'bootstrap',
  jsonFile: jsonReportPath,
  output: path.join(reportDir, 'cucumber_report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Test Environment": "Local",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Node Version": process.version
  }
};

console.log('⏳ Generating HTML report...');
reporter.generate(options);
console.log('✅ HTML report generated at:', options.output);
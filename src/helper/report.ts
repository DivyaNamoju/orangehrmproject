const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-results/",
  reportPath: "./test-results/reports/",
  metadata: {
    browser: {
      name: "chrome",
      version: "128",
    },
    device: "Divya - PC",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test Run Info",
    data: [
      { label: "Project", value: "Orange HRM Demo" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" }
    ],
  },
});
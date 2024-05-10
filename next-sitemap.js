const packageConfig = require("./package.json");

module.exports = {
  siteUrl: packageConfig.homepage,
  generateRobotsTxt: true,
};

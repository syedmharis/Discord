const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Comment out Amplify exclusion since we're not using it
// const exclusionList = require("metro-config/src/defaults/exclusionList");
// config.resolver.blacklistRE = exclusionList([/#current-cloud-backend\/.*/]);

module.exports = config;

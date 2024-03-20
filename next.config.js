/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// next.config.js
module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

// next.config.js
module.exports = {
  reactStrictMode: false, // or remove this line completely
};

const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
};

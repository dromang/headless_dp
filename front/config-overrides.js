const express = require("express");
const webpack = require("webpack");
module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
    path: require.resolve("path-browserify"),
    zlib: require.resolve("browserify-zlib"),
    fs: false,
    net: false,
    async_hooks: false,
    tls: false,
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  const target = config.target || {};
  Object.assign(target, {
    target: "node",
  });
  config.target = target;

  const externals = config.externals || {};
  //const nodeExternals = require("webpack-node-externals");
  Object.assign(externals, {
    node: true,
    express: "express",
  });
  config.externals = externals;
  return config;
};

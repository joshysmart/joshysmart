/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  browserNodeBuiltinsPolyfill: {
    modules: {
      fs: true,
      path: true,
      child_process: true,
      tls: true,
      crypto: true,
      os: true,
      dns: true,
      events: true,
      http: true,
      https: true,
      net: true,
      stream: true,
      zlib: true,
      util: true,
      url: true,
    },
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};

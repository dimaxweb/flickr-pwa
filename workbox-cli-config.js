module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,png,svg,html,json}'],
  swDest: 'dist/service-worker.js',
  swSrc :'src/service-worker.js',
  globIgnores: ['**/service-worker.js'],
  maximumFileSizeToCacheInBytes: 20 * 1024 * 1024
};

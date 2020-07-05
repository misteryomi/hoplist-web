// next.config.js
const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts');
const withImages = require('next-images');

module.exports = withSass(withFonts(withImages({
  webpack(config, options) {
   return config;
  },
})));

// module.exports = {
//   env: {
//     customKey: 'my-value',
//   }
// }

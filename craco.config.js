const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@font-size-xxl': '28px' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

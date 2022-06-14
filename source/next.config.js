const withAntdLess = require('next-plugin-antd-less');
const Dotenv = require('dotenv-webpack');

module.exports = withAntdLess({
  modifyVars: { '@primary-color': '#04f' },
  lessVarsFilePath: './styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  externals: {
    'React': 'react'
},
  // Other Config Here...
  "react/display-name": "off",
  images:{
    loader: 'akamai',
    path: ' '
  },
  webpack(config) {
    return config;
  },
  future: {
    webpack5: true,
  },
});
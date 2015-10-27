
const project = {
  input: './assets/',
  output: {
    debug: './target/webpack-dev/',
    release: './target/webpack/',
  },
  entries: {
    'javascripts/home': './javascripts/home',
    'javascripts/hello': './javascripts/say',
  },
  commonsChunk: 'javascripts/init.js',
  commonsCss: 'stylesheets/main.css'
};

export default project;

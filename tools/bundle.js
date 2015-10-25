import webpack from 'webpack';
// import copy from 'copy';
import config from './config';

export default async () => {
  // await require('./copy')();

  return new Promise(function(resolve, reject) {
    const bundler = webpack(config);
    const run = (err, stats) => {
      if (err) {
        reject(err);
      } else {
        console.log(stats.toString(config[0].stats));
        resolve();
      }
    };
    bundler.run(run);
  });
}

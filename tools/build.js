// More info on webpack node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file
/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via webpack. THis will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if(err){
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarnings){
    console.log('webpack generated the following wranings:'.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`webpack stats: ${stats}`);

  // if we got this far, build succeeded.
  console.log('Your app ahs been compiled in production mode and written to /dist. It\'s ready to roll!'.green);
  return 0;
});

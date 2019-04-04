module.exports = function(config) {
  config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
          'node_modules/moment/moment.js',
          'js/*.js',
          'spec/*.js'
      ],
      browsers: ['Chrome'],
      // singleRun: true,
      reporters: ['progress', 'coverage'],
      preprocessors: { '*.js': ['coverage'] }
  });
};
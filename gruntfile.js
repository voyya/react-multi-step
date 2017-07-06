'use strict'

var _ = require('lodash')
var webpack = require('webpack')

var mergeWebpackConfig = function (config) {
  // Load webpackConfig only when using `grunt:webpack`
  // load of grunt tasks is faster
  var webpackConfig = require('./webpack.config')
  return _.merge({}, webpackConfig, config, function (a, b) {
    if (_.isArray(a)) {
      return a.concat(b)
    }
  })
}

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      min: {
        files: {
          'dist/react-multi-step.css': 'src/stylesheets/multistep.scss',
          'dist/react-multi-step-cssmodules.css': 'src/stylesheets/multistep-cssmodules.scss'
        },
        options: {
          sourcemap: 'none',
          style: 'expanded'
        }
      },
      unmin: {
        files: {
          'dist/react-multi-step.min.css': 'src/stylesheets/multistep.scss',
          'dist/react-multi-step-cssmodules.min.css': 'src/stylesheets/multistep-cssmodules.scss'
        },
        options: {
          sourcemap: 'none',
          style: 'compressed'
        }
      }
    },

    watch: {
      eslint: {
        files: ['{src,test,docs-site/src}/**/*.{js,jsx}', '*.js'],
        tasks: ['eslint']
      },

      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },

      karma: {
        files: [
          'src/**/*.jsx',
          'src/**/*.js',
          'test/**/*.jsx',
          'test/**/*.js'
        ],
        tasks: ['karma']
      },

      webpack: {
        files: ['src/**/*.js', 'src/**/*.jsx'],
        tasks: ['webpack']
      }
    },

    sasslint: {
      files: ['src/stylesheets/*.scss', 'docs-site/src/*.scss'],
      options: {
        config: '.sass-lint.yml',
        colorizeOutput: true,
        exclude: ['docs-site/src/higlight.scss', 'docs-site/src/reset.scss']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    eslint: {
      files: ['{src,test,docs-site/src}/**/*.{js,jsx}', '*.js'],
      options: {
        configFile: '.eslintrc'
      }
    },

    // standalone build for ./dist
    webpack: {
      unmin: mergeWebpackConfig({
        output: {
          filename: 'react-multi-step.js'
        }
      }),
      min: mergeWebpackConfig({
        output: {
          filename: 'react-multi-step.min.js'
        },
        plugins: [
          new webpack.optimize.UglifyJsPlugin({
            compressor: {
              warnings: false
            }
          })
        ],
        module: {
          loaders: [{
            query: {
              plugins: ['transform-react-remove-prop-types']
            }
          }]
        }
      }),
      docs: require('./webpack.docs.config')
    },

    // source build for ./lib
    babel: {
      lib: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js', '**/*.jsx'],
          dest: 'lib/',
          ext: '.js'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-sass-lint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-webpack')
  grunt.loadNpmTasks('grunt-karma')
  grunt.loadNpmTasks('grunt-eslint')

  grunt.registerTask('default', ['watch', 'sasslint'])
  grunt.registerTask('travis', ['eslint', 'karma', 'sasslint'])
  grunt.registerTask('build', ['sasslint', 'babel', 'webpack', 'sass'])
}

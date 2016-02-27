

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'meta': {
      'jsFilesForTesting': [
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'test/**/*Spec.js'
      ]
    },

    'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'src/**/*.js'
          ],
        }
      },
      'dist': {
        'options': {
          'configFile': 'karma.conf.js',
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
          ],
        }
      },
      'minified': {
        'options': {
          'configFile': 'karma.conf.js',
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js'
          ],
        }
      }
    },

    'jshint': ['src/**/*.js'],

    'concat': {
      'dist': {
        'src': ['src/**/*.js'],
        'dest': 'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
      }
    },

    'uglify': {
      'options': {
        'mangle': false
      },  
      'dist': {
        'files': {
          'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.namelower %>-<%= pkg.version %>.js']
        }
      }
    },

    'watch': {
      files: [
        '<%= meta.jsFilesForTesting %>',
        'src/**/*.js'
      ],
      tasks: ['build:dev']
    }
  });

  grunt.registerTask('build:dev', [
    'jshint',
    'karma:development'
  ]);

  grunt.registerTask('build:dist', [
      'concat',
      'karma:dist',
      'uglify',
      'karma:minified'
  ])

  grunt.registerTask('default',
    [
      'build:dev',
      'watch'
    ]);

};
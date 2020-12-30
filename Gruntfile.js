module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
    ngAnnotate: {
      demo: {
        files: {
            'dist/app-ng-annotated.js': [
              'frontend/angular_components/app.js',
            	'frontend/angular_components/services/api-constants.js',
              'frontend/angular_components/services/translation-api-util.js',
            	'frontend/angular_components/bing-results/bing-results.js',
            	'frontend/angular_components/frengly-results/frengly-results.js',
            	'frontend/angular_components/yandex-results/yandex-results.js',
            	'frontend/angular_components/input/input.js']
        },
      }
    },

    uglify: {
	    my_target: {
	      files: {
	        'dist/app.min.js': [
	        	'dist/app-ng-annotated.js'
	        ]
	      }
	    }
	  },

    watch: {
      scripts: {
        files: ['**/**/*.js', '**/**/**/*.js'],
        tasks: ['default'],
        options: {
          livereload: 4000,
          watch: true,
        },
      },
    },
  });

	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('default', ['ngAnnotate', 'uglify']);
  grunt.registerTask('watch', ['watch']);
};

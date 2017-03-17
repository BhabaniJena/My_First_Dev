module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourcemap: 'none'
      },
      compile: {
        files: {
          'css/main.css': 'sass/main.scss',

        }
      }
    },

    cssmin: {
      target: {
          files: {
            'css/main.min.css': ['css/main.css']
          }
      }
    }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin']);



};
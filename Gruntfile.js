/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.

    uglify: {
      my_target: {
        files: {
          'js/perfmatters.min.js': ['js/perfmatters.js']
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

    responsive_images: {
      dev: {
        options: {
          // this tells it to use ImageMagick
          engine: 'im',
          sizes: [{
            name: 'med',
            width: 600,
            quality: 70
          }]
        },

        files: [{
          expand: true,
          // src: ['**.jpg'],
          src: ['kitten-4.jpg'],
          cwd: 'img/img_orig/',
          dest: 'img'
        }]
      }
    }

  });

  // These plugins provide necessary tasks.

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['responsive_images']);
// 'watch', 'jshint', 'qunit', 'concat', 'uglify', 'responsive_images', 'cssmin'
};

module.exports = function(grunt) {
  grunt.initConfig({


    sync: {
      main: {
        files: [{
          cwd: 'source/',
          src: ['js/*.js', 'fonts/*', 'images/*', '*.html', 'css/*.css'],
          dest: 'build/'
        }, ],
        verbose: true,
        failOnError: true,
        updateAndDelete: true
      }
    }, //синхронизирует папки source и build

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          src: 'source/scss/main.scss',
          dest: 'source/css/main.css'
        }]
      }
    }, //scss обработчик
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 5
        },
        files: [{
          expand: true,
          cwd: 'source/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/images'
        }]
      }
    }, //сжатие картинок


    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: 'build/',
          livereload: true
        }
      }
    }, //livereload

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scss: {
        files: ['source/scss/**/*.scss'],
        tasks: ['sass', 'sync']
      },
      copyJs: {
        files: ['source/js/*.js'],
        tasks: ['sync']
      },

      copyFonts: {
        files: ['source/fonts/*'],
        tasks: ['sync']
      },
      copyHTML: {
        files: ['source/*.html'],
        tasks: ['sync']
      },
      copyImages: {
        files: ['source/images/*'],
        tasks: ['newer:imagemin']
      }
    }, //изменение файлов
    webfont: {
            icons: {
                src: 'assets/icons/*.svg',
                dest: 'source/fonts/',
                destCss: 'source/scss/base/',
                options: {
                  stylesheet: 'scss',
                    font: 'icons',
                    fontHeight: 96,
                    normalize: false,
                    ascent: 84,
                    descent: 12,
                    destHtml: 'assets/',
                    templateOptions: {
                        classPrefix: 'icon-'
                    }
                }
            }
        }

  }); //initConfig

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['newer:imagemin', 'newer:sass', 'sync', 'connect', 'watch']);

};

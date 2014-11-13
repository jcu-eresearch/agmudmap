module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build/*'],
        jshint: {
            src: ['src/mudmap.js'],
        },
        copy: {
            source: {
                expand: true,
                cwd: 'src/',
                src: '**',
                dest: 'build/'
            },
            mapimage: {
                src: 'src/images/map.jpg',
                dest: 'build/images/map.jpg'
            }
        },
        wiredep: {
            task: {
                src: ['build/index.html']
            }
        },
        bower: {
            target: {
                rjsConfig: 'build/scripts/main.js'
            }
        },
        autoprefixer: {
            source: {
                src: 'build/*.css'
            }
        },
        useminPrepare: {
            html: 'build/index.html',
            options: {
                dest: 'build'
            }
        },
        usemin: {
            html: 'build/index.html',
            css: 'build/*.css',
            options: {
                assetsDirs: ['build'],
                patterns: {
                    css: [],
                }
            }
        },
        smushit: {
            images: {
                src: 'build/**/*.{gif,png}'
            }
        },
        filerev: {
            images: {
                src: 'build/**/*.{js,png,jpg,css}'
            }
        },
        // Requirejs and usemin end up pointing at the 'same' location
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'build/scripts/main.js',
                    name: 'almond',
                    include: ['main'],
                    out: 'build/scripts/app.js'
                }
            }
        },
        watch: {
            all: {
                files: ['src/**'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-smushit');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Auto load Bower dependencies into HTML
    grunt.loadNpmTasks('grunt-wiredep');
    // Auto-populate require.js config
    grunt.loadNpmTasks('grunt-bower-requirejs');
    // r.js optimisation
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', [
        'clean',
        'jshint',
        'copy:source',
        'wiredep',
        'bower',
        'autoprefixer',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        //'uglify:generated',
        'smushit',
        'requirejs',
        'filerev',
        'usemin',
        'copy:mapimage'
    ]);
    grunt.registerTask('dev', [
        'clean',
        'jshint',
        'copy:source',
        'wiredep',
        'bower',
        'autoprefixer'
    ]);
};

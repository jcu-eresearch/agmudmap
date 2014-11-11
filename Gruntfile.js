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
            }
        },
        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'build'
            }
        },
        usemin: {
            html: 'build/index.html'
        },
        filerev: {
            images: {
                src: 'src/*.{jpg,png}',
                dest: 'build'
            }
        },
        wiredep: {
            task: {
                src: ['build/index.html']
            }
        },
        watch: {
            all: {
                files: ['src/*'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('default', [
        'clean',
        'jshint',
        'copy',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'wiredep',
        'usemin'
    ]);
};

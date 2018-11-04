module.exports = function (grunt) {
	grunt.initConfig({
		uglify : {
			myFirst : {
				files : {
					'dist/js.js':'src/js.js'
				}
			}
		},
		htmlmin:{
			firstTarget : {
				options: {                                 // Target options
			        removeComments: true,
			        collapseWhitespace: true
			      },
			      files: {                                   // Dictionary of files
			        'dist/index.html': 'src/index.html'
			      }
			}
		},
		cssmin:{
			cssminTarget: {
			  options: {
			    mergeIntoShorthands: false,
			    roundingPrecision: -1
			  },
			    files: {
			      'dist/css.css': 'src/css.css'
			    }
			}
		}
	})
	grunt.loadNpmTasks("grunt-contrib-htmlmin")
	grunt.loadNpmTasks("grunt-contrib-cssmin")
	grunt.loadNpmTasks("grunt-contrib-uglify")
	grunt.registerTask("default",['htmlmin','cssmin','uglify'])
}
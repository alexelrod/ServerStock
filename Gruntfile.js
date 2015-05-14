module.exports=function(grunt){
   grunt.initConfig({
   	 pkg: grunt.file.readJSON('package.json'),
    concat: {
      all: {
        src: "./public/assets/js/*/*.js",
		dest:"./public/assets/js/todo.js"
       }}
     ,
    uglify: {
      all: {
        src: "./public/assets/js/todo.js",
        dest: './public/assets/js/todo.min.js'
      }}

  });
 grunt.task.loadNpmTasks('grunt-contrib-concat');
 grunt.task.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default",["concat","uglify"]);
	grunt.registerTask("dist",["default"]);

};


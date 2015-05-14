module.exports=function(grunt){
   grunt.initConfig({
   	 pkg: grunt.file.readJSON('package.json'),
    concat: {
      all: {
        src: ["./public/assets/js/vendor/jquery.js","./public/assets/js/vendor/json2.js","./public/assets/js/vendor/underscore.js","./public/assets/js/vendor/handlebars.js","./public/assets/js/vendor/backbone.js","./public/assets/js/vendor/backbone.marionette.js","./public/assets/js/app.js","./public/assets/js/entities/collec.js","./public/assets/js/entities/controller.js","./public/assets/js/entities/initView.js","./public/assets/js/entities/vistaTemplate.js"],
		dest:"./public/assets/js/all.js"
       }}
     ,
    uglify: {
      all: {
        src: "./public/assets/js/all.js",
        dest: './public/assets/js/all.min.js'
      }}

  });
 grunt.task.loadNpmTasks('grunt-contrib-concat');
 grunt.task.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default",["concat","uglify"]);
	grunt.registerTask("dist",["default"]);

};


// this script-import.js helps to import all the files form "vendors" folder and compile them into vendors.min.js. Minified version of js helps to the load website much faster. 
// Use following syntax to prepend required libraries/scripts
// Use **/*.js if you don't need to follow a specific order
// You can override the order by requiring the JS file before the global require

//=require plugins/**/jquery-3.4.1.min.js
//=require plugins/**/popper.min.js
//=require plugins/**/bootstrap.min.js
//=require plugins/**/animated-headline.js
//=require plugins/**/*.js

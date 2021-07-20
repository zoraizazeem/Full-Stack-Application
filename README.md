# Full-Stack-Application

NB: This is a beta and will need further developement

**Intro**
-
This is my "What do I owe?" application.
This application consists of the front and backend, i.e. the UI and the dynamic server.

**The What ?**
-
This is a productivity application.
I use this personally to record the amount of work I have done for each of the categories I have allotted myself. (i.e. business, work, exercise etc.) 

**The Why ?**
-
I wanted to experiment with interactive data representation (donut graphs) using the JavaScript programming language. Data is stored in local storage and session storage so check your browser compatibility on https://www.w3schools.com/html/html5_webstorage.asp


**Directories**
-
/What do I owe = The client side javascript and html and...

/server = The server side javascript.

**Packages/frameworks Used**
-
node.js, express, monk, mongodb, cors and chart.js.
CSS styling from: https://bulma.io

**Before You Start**
-

This program stores permanent data using mongoDB which is very simple and requires no SQL knowledge. You can both store data locally (during developement) and when you deploy.
If you are not farmiliar with mongoDB see the following helpful vid: https://www.youtube.com/watch?v=pWbMrx5rVBE.

Before running the "What do I owe" program you will need to run mongo.exe, and create the database “test”. Then you can run the program locally and your data should be stored in the C:\data\test location (when you start the mongo.exe) into the collection “mydata”. 

During dev there are 3 key steps when running this program:
1) to serve the front end, you will need to use the "http-server" npm module (https://www.npmjs.com/package/http-server) starting this server on the /What do I owe directory. See how to do so in the following video: https://www.youtube.com/watch?v=oa9m8321_nw. 
2) Also you will have to start the mongo.exe file inorder to store the data locally and to test if you are getting data persistence. Typically mongo.exe file found in C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe, but your mileage may vary.
3) Finally and certainly not least, you have to run the backend server (conveniently labeled /server in this remote repository). simply run commmand "npm run dev" (this will use the nodemonitor to run the index.js in this directory)


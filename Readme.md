# Description

This is an API developed using Node for basic crud operation.


# Packages Installation & Description

Express body-parser and mongoose are the packages and dependencies required for the development of this api.

1. Express : Express is the popular library to ease server side development for node.js. It is built on top of node.js http module, and adds support for routing, middleware, view system etc. It is very simple and minimal, unlike other frameworks that try do way to much, thereby reducing the flexibility for developers to have their own design choices.

2. Body-parser: It is a module that parses the request (of various content types) and creates a req.body object that we can access in our routes.

3. Mongoose: It is an ODM (Object Document Mapping) tool for Node.js and MongoDB. It helps you convert the objects in your code to documents in the database and vice versa.




# Process

$ npm init

create a server.js file.

install dependencies

$ npm install express body-parser mongoose --save

The server.js is the main entry point for this Application.

Configuration folder includes database configurations. The database model is created within inside app/models folder.
Routes folder has all the routes defined for the crud operation. The controller folder has the controller functions to perform crud operation.

# Final

The app has been tested with postman for all the operation and is working fine.



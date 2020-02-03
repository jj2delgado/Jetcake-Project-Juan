# Jetcake-Project-Juan
Steps: to run on local machine.

Fork and clone repository from https://github.com/jj2delgado/Jetcake-Project-Juan

In terminal install all of the projects' dependencies:
    axios
    bcrypt
    dotenv
    express
    express-session
    massive
    node-pre-gyp
    nodemon
    react
    react-dom
    react-redux
    react-router-dom
    react-scripts
    redux
    redux-promise-middleware

    *to install bcrypt I had to run this command on powershell with administrator privileges:
    npm install --global --production windows-build-tools

In my local build I have a .env file with variables that I didn't push to my github repository
There are three variables:

SERVER_PORT = (can be any port you want)

SESSION_SECRET = (can be any string you want)

CONNECTION_STRING = postgres://ymqeownjstsafp:c7881e6e30888883b6bee586dc4d7a8db023cc2295888d8446bbf1eb98ff8532@ec2-174-129-255-57.compute-1.amazonaws.com:5432/d2bkl0riin874e?ssl=true

The above connections string value contains the link for my cloud database with Heroku
You must add your own local .env file

After adding the .env and installing dependencies you can open two terminals and run two commands:
npm start
nodemon

nodemon for backend and npm start for front end

## Simple app deployed on a bare metal
### npm initialize
* This is the initializer used to create package.json for the simple app, to app build
```
npm init -y
```
### Install express
* This is a Node.js framework for authoring web applications. It provides methods to specify the function to be called for a particular HTTP verb (GET, POST, SET, etc.) and URL pattern (“Route”).
```
npm install express
```
## Run the application
* This is used to run the application.
```
node app.js
```

## Steps used to manually deploy the application on a bare metal.

* Provisioned an EC2 instance to serve as my bare metal on AWS running on amazon-linux OS.​

* SSH into the server to install nodejs to run the application and  git to enable cloning of the app from the GitHub repository; ​

```
sudo yum install git –y​
```
```
sudo yum install nodejs -y​
```
* Whilst still on the sever, at the ec2-user directory, clone the app from the git repository.​
```
git clone https://github.com/mide18/hello-world-bare-metal.git​
```

* To start the application running on bare metal after cloning the app and dependencies; move to the directory of the application and run: ​
```
node app.js
```
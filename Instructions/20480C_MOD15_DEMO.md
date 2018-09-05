# Module 15: Packaging Javascript for Production Deployment

# Lesson 2: Creating Separate Packages for Cross Browser Support

### Demonstration: Using Babel CLI to Compile JavaScript Code

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

#### Configure Babel on A new project

1. Create folder "babelDemo"

2. Open CMD and navigate to new folder
3. Run "npm init" to create package.json
4. Create new folder "src" and add new file "index.js"
5. Add the code below:
    ```javascript
        let customer = { name: "Joann Chambers" },
        message = `Hello ${customer.name}`;
    ```
6. Install babel-cli and babel-preset with **npm install --save-dev babel-cli babel-preset-es2015**
7. Insert code below to package.json:
    ```json
        "scripts": {
            "build": "babel --presets es2015 src -d dist"
        },
    ```
This code allow you to run "npm run build" without needed reference to node_modules babel. 

8. Write in CMD **npm run build**.
The dist folder and new index file with es2015 style created. 


### Demonstration: Using Webpack and Babel to Build a JavaScript App

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

#### 

1. Navigate (cd) to the build-tutorial directory.
2. Type the following command to create a package.json file **npm init**
3. Install http-server in your project. http-server is a lightweight web server we use to run the application locally during development and avoid cross domain policy issues when loading data using XMLHttpRequest. **npm install http-server --save-dev**
4. Open package.json in your favorite code editor. In the scripts section, remove the test script, and add a script named start that starts the local web server. The scripts section should now look like this:
    ```json
        "scripts": {
            "start": "http-server"
        },
    ```
5. On the command line, type the following command to start the HTTP server: **npm start**
6. Open explorer 10 browser and go to http://localhost:8080/index.html show to students that code not work.

#### Set Up Babel and Webpack.

1. open code in app.js and show the code include ECMAScript 6 features, explain that we going to use babel to compile them.
2. In the build-tutorial directory, create a new file named webpack.config.js defined as follows:
    ```javascript
        var path = require('path');
        var webpack = require('webpack');
        module.exports = {
            entry: './js/app.js',
            output: {
                path: path.resolve(__dirname, 'build'),
                filename: 'app.bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            stats: {
                colors: true
            },
            devtool: 'source-map'
        };
    ```
3. Open package.json and add a script named webpack that builds your application using Webpack and Babel:
    ```json
        "scripts": {
            "webpack": "webpack",
            "start": "http-server"
        },
    ```
4. In build-tutorial root create build directory
5. On command line type the following command to build the app: **npm run webpack**
6. Open index.html and change the script tag to:
    ```html
        <script src="build/app.bundle.js"></script>
    ```
7. Run npm start in command line,
8. Open again in explorer 10 and show that code run.
9. replace the callback-based inplementation of the request() function with an ECMAScript 6 promise-based implementation.
The request() function definition should now look like this:
    ```javascript
        let request = obj => {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open(obj.method || "GET", obj.url);
                if (obj.headers) {
                    Object.keys(obj.headers).forEach(key => {
                        xhr.setRequestHeader(key, obj.headers[key]);
                    });
                }
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.statusText);
                    }
                };
                xhr.onerror = () => reject(xhr.statusText);
                xhr.send(obj.body);
            });
        };
    ```
10. Modify the call to the request() function to use ECMAScript 6 .then() and .catch() syntax.
    ```javascript
        request({url: "employees.json"})
        .then(data => {
            let employees = JSON.parse(data);
            let html = "";
            employees.forEach(employee => {
                html += `
                    <div>
                        <div>
                            ${employee.firstName} ${employee.lastName}
                            <p>${employee.phone}</p>
                        </div>
                    </div>`;
            });
        document.getElementById("list").innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
    ```
11. Run **npm start** and show the code run in edge because edge support promise. Open the app with explorer 10 and show to the students that code not runinig.
12. Add babel polyfill by useing the command **npm install --save babel-polyfill**
13. With webpack.config.js, add babel-polyfill to your entry array:
    ```json
        entry: ["babel-polyfill","./js/app.js"],
    ```
14. Insert new script tag to index.html
    ```html
        <script src="node_modules/babel-polyfill/dist/polyfill.min.js"></script>
    ```
15. Run **npm start** and show in explorer the code works.

16. Insert modules to code.
In the /js directory, create a new file named request.js
17. Move the request() function definition from app.js into request.js
18. Use export to add request as default function to the module.
19. In the end of code insert line:
    ```javascript
        export default request;
    ```
20. import the request module in app.js
    ```javascript
        import request from './request';
    ```
21. Build and run the app

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

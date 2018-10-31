 # Module 15: Packaging JavaScript for Production Deployment
 
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 2: Creating Separate Packages for Cross Browser Support

### Demonstration: Using Babel CLI to Compile JavaScript Code

#### Preparation Steps

Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for the labs and demos of this course. (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**)

#### Demonstration Steps

#### Create New Project

1. Open Microsoft Visual Studio 2017.
2. In Microsoft Visual Studio, on the **File** menu, point to **New**, and then click **Project**.
3. In the left pane of the **New Project** dialog box, under **Installed**, expand the **Visual C#** node, and then click the **Web** node.
4. Click **ASP.NET Web Application(.NET Framework)**.
5. In the **Name** box, type **babelDemo**.
6.	In the **Location** box, type **[Repository Root]\Allfiles\Mod15\DemoCode**, and then click **OK**.
7. In new ASP.NET Web Application - babelDemo page select **Empty** and then click **OK**.
8. In babelDemo - Microsoft visual Studio, on the **Project** menu click **New Folder**.
9.  Name it **src**.
10.  In babelDemo - Microsoft Visual Studio, right-click **src** folder and point to **Add** and then click **NewItem**.
11.  In the **Add New Item – babelDemo** dialog box, click **JavaScript File**.
12.  In the **Name** box, type **index.js**.
13.  Click **Add**.
14.  Add the following code:
```javascript
    let customer = { name: "Joann Chambers" };
    let message = `Hello ${customer.name}`;
```

#### Configure Babel on A new project

1.	In babelDemo - Microsoft Visual Studio, on the **Project** menu click **Add New Item**.
2.	In the **Add New Item – babelDemo** dialog box, click **npm Configuration File**.
3.	In the **Name** box, type **package.json**.
4.	Click **Add**.
5.  At the command prompt, navigate to the project folder.
6.  To install **babel-cli** and **babel-preset**, run the following command at the command prompt:
   ```bash
        npm install --save-dev babel-cli babel-preset-es2015
   ```
7.  Insert the following code to **package.json**:
   ```json
        "scripts": {
            "build": "babel --presets es2015 src -d dist"
        },
   ```
>**Note**: This code allows you to run **npm run build** without reference to **node_modules babel**. 

8.  At the command prompt, run the command:
```bash
        npm run build
```
>**Note**: The application creates the **dist** folder and the **new index** file according to the ECMAScript 2015 standards.

### Demonstration: Using Webpack and Babel to Build a JavaScript App

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for the labs and demos of this course. (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**)

#### Demonstration Steps

#### Set Up Npm Configuration

1.	Open Microsoft Visual Studio.
2.	In Microsoft Visual Studio, on the **File** menu, point to **Open**, and then click **File**.
3.	In the **Open File** dialog box, browse to the **[Repository Root]\Allfiles\Mod15\DemoCode\build-tutorial** folder, click **build-tutorial.sln**, and then click **Open**.
4.	In build-tutorial - Microsoft Visual Studio, on the **Project** menu, click **Add New Item**.
5. In the **Add New Item – build-tutorial** dialog box, click **npm Configuration File**.
6.	In the **Name** box, type **package.json**.
7.	Click **Add**.

#### Set Up Babel and Webpack

1.  Open the command prompt and navigate to the project folder.
2.  To install **@babel/core**, **babel-loader**, **@babel/preset-env**, **webpack**, and **webpack-cli**, run the following command at the command prompt:
   ```bash
        npm install @babel/core babel-loader @babel/preset-env webpack webpack-cli --save-dev
   ```
3.  To install **babel-polyfill**, **babel-plugin-transform-async-functions**, **isomorphic-fetch**, run the following command at the command prompt:
   ```bash
        npm install babel-polyfill babel-plugin-transform-async-functions isomorphic-fetch --save
   ```
4.  In build- tutorial - Microsoft Visual Studio, on the **Project** menu, Click **Add New Item**.
5.  In the **Add New Item – build-tutorial** dialog box, click **JavaScript File**.
6.  In the **Name** box, type **webpack.config.js**.
7.  Click **Add**.
8.  In the **webpack.config.js** file, configure **webpack** as follows:
   ```javascript
    var path = require('path');
    var webpack = require('webpack');

    module.exports = {
        entry: ['babel-polyfill', './scripts/app.js'],
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["transform-async-functions"]
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
   
9.  In Solution explorer expand scripts folder and then double-click app.js at start add the following code:
   ```javascript
    require('babel-polyfill');
    require('isomorphic-fetch');
   ```
10.  Open the **package.json** file and add a script named **webpack** that builds your application by using **webpack** and **Babel**.
   ```json
        "scripts": {
            "webpack": "webpack"
        },
   ```
11.  In Solution explorer right-click on **build -tutorial** and point to **Add** and then click **New folder**.
12.  In the **Name** box, type **build**.
13.  Click **Add**.

#### Build and Run the App

1.  At the command prompt, run the following command:
   ```bash
        npm run webpack
   ```
2.  Open **index.html** and replace the script **src** value to the bundle file.
   ```html
        <script src="build/app.bundle.js"></script>
   ```
3.  Run the application.
4.  Open Microsoft Internet Explorer 11 and go to **http://localhost:51341/index.html**.
5.  Check whether the website runs in Internet Explorer 11 as it does in Microsoft Edge.
6.  On the Debug menu click **Stop Debugging**.
7.  Close all open windows.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

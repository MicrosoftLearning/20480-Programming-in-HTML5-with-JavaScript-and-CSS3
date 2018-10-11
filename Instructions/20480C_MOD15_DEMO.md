 # Module 15: Packaging Javascript for Production Deployment

# Lesson 2: Creating Separate Packages for Cross Browser Support

### Demonstration: Using Babel CLI to Compile JavaScript Code

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

#### Create new project

1. On the Windows 10 **Start** screen, open **Visual studio 2017**.
2. In Visual Studio, on the **File** menu, point to **New**, and then click **Project**.
3. In the **New Project** dialog box, in the left pane, under **Installed** expand the **Visual C#** node, and then click the **Web** node.
4. click **ASP.NET Empty Web Application**.
5. In the **Name** box, type **babelDemo**.
6.	In the **Location** box, type **Allfiles\Mod15\DemoCode**, and then click **OK**.
7.  In Visual Studio, on the **Project** menu, right click **New Folder**.
8.  Name it **src**
9.  In Visual Studio, on the **src** folder, right click **Add New Item**.
10.  In the **Add New Item – babelDemo** dialog box, click **JavaScript File**.
11.  In the **Name** box, type **index.js**.
12.  Click **Add**.
13.  Add the code below:
```javascript
    let customer = { name: "Joann Chambers" };
    let message = `Hello ${customer.name}`;
```

#### Configure Babel on A new project

1.	In Visual Studio, on the **Project** menu, right click **Add New Item**.
2.	In the **Add New Item – babelDemo** dialog box, click **npm Configuration File**.
3.	In the **Name** box, type **package.json**.
4.	Click **Add**.
5.  In **CMD** navigate to the project folder 
6.  To install **babel-cli** and **babel-preset** run the following command in **cmd**:
    ```bash
        npm install --save-dev babel-cli babel-preset-es2015
    ```
7.  Insert the code below to **package.json**:
    ```json
        "scripts": {
            "build": "babel --presets es2015 src -d dist"
        },
    ```
>**note:** This code allow you to run "npm run build" without needed reference to node_modules babel. 

8.   In **CMD** run the commend:
```bash
        npm run build
```
>**note:** The dist folder and new index file with es2015 style sholed create. 

### Demonstration: Using Webpack and Babel to Build a JavaScript App

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

#### Set up npm configuration.

1.	Open Microsoft Visual Studio 2017.
2.	In Visual Studio, on the **File** menu, point to **Open**, and then click **File**.
3.	In the **Open File** dialog box, browse to the **Allfiles\Mod15\DemoCode\build-tutorial** folder, click **build-tutorial.sln**, and then click **Open**.
4.	In Visual Studio, on the **Project** menu, right click **Add New Item**.
5.	In the **Add New Item – babelDemo** dialog box, click **npm Configuration File**.
6.	In the **Name** box, type **package.json**.
7.	Click **Add**.

#### Set Up Babel and Webpack.

1.  In Visual Studio, on the **Project** menu, right click **Add New Item**.
2.  In the **Add New Item – build-tutorial** dialog box, click **JavaScript File**.
3.  In the **Name** box, type **webpack.config.js**.
4.  Click **Add**.
5.  In **webpack.config.js** file, configure **webpack** as follows:
    ```javascript
        var path = require('path');
        var webpack = require('webpack');
        module.exports = {
            entry: './scripts/app.js',
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
6.  Open **package.json** file and add a script named **webpack** that builds your application using **Webpack** and **Babel**:
    ```json
        "scripts": {
            "webpack": "webpack"
        },
    ```
7.  In build-tutorial, right click **Add** and select **folder**.
8.  In the **Name** box, type **build**.
9.  Click **Add**.

#### Build and run the app

1.  In **CMD** run the following commend:
    ```bash
        npm run webpack
    ```
2.  Open **index.html** and replace the script **src** value to the bundel file.
    ```html
        <script src="build/app.bundle.js"></script>
    ```
3.  Run the application.
4.  Open explorer 10 and go to **http://localhost:51341/index.html**.
5.  See that the site still running in **explorer 10** like in **edge**.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

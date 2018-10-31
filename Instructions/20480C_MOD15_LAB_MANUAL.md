## Module 15: Packaging JavaScript for Production Deployment

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

## Lab: Setting Up Webpack Bundle for Production

#### Scenario

When you create a website and deploy it to a production server, you would want the site to be light and fast. You would also not want to make too many requests to get the site JavaScript file.

Therefore, you will want to bundle your website files into one file.


#### Objectives

After completing this lab, you will be able to: 
- Configure webpack and Babel and create a deploy package for a web project.


#### Lab Setup

Estimated Time: **45 minutes**

### Exercise 1: Creating a Deploy Package Using Webpack

#### Scenario

In this exercise, you will add webpack and configure it for the ContosoConf project.

First, you will install the webpack package in the solution. You will then configure it to create a bundle file for all your JavaScript files. Then, you will add Babel to your solution to create a cross-platform package.


Next, you will run webpack to create a deploy package.

Finally, you will run the application and verify that the site remains the same with the bundle file.

#### Task 1: Install and configure Babel and webpack

1.	Start Microsoft Visual Studio and from the **[Repository Root]\Allfiles\Mod15\Labfiles\Starter** folder, open the **ContosoConf.sln** solution.
2.  In your project, create the **package.json** file.
3.  To install the **babel-core**, **babel-loader**, **babel-preset-es2015**, and **webpack** packages in developer mode, use the command prompt.
4.  In your project root, create the **webpack.config.js** file.
5.  Configure webpack and pass an entry with the object to include all the JavaScript files in the HTML files.
   ```javascript

        entry: {
            video: './scripts/pages/video.js',
            feedback: './scripts/pages/feedback.js',
            live: './scripts/pages/live.js',
            location: './scripts/pages/location.js',
            locationVenue: './scripts/pages/location-venue.js',
            register: './scripts/pages/register.js',
            schedule: './scripts/pages/schedule.js',
            speakerBadge: './scripts/pages/speaker-badge.js',
            offline: './scripts/offline.js'
        }
   ```
6. Add the **output** object to **module.exports**, configure the **path** property to indicate where to save the **bundle** files, the **filename** property with the **name** placeholder, and **publicPath** with the **dist** value.
   ```javascript
   
        output: {
            path: path.resolve(__dirname,'dist'),
            filename: '[name].bundle.js',
            publicPath: '/dist/'
        },
   ```
7. Add the **module** object to **module.exports**. Inside the object, add the **rules** array with the **babel-loader** configuration object.
   ```javascript

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
   ```
8. To **module.exports**, add the **stats**, **devtool**, and **mode** objects.
   ```javascript

        stats: {
            colors: true
        },
        devtool: 'source-map',
        mode: 'production'
   ```


#### Task 2: Create bundle files and replace JavaScript

1.  Run **npm run webpack**.
2.  Replace all the scripts in the HTML files to import the new bundle files.
3.  Run the application. The application should work as before and support older versions of Internet Explorer.

>**Results**: After completing this exercise, you will have a new **bundle.js** file which supports ECMAScript 5 for older browsers.


©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

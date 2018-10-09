## Module 15: Packaging Javascript for Production Deployment

## Lab: Setting Up Webpack Bundle for Production

#### Scenario

When you create a website and you want to deploy it to a production server you want the site to be light and fast and you don’t want to make too many requests to get the site JS file.

Therefore, you’ll want to bundle your website files into one file.

#### Objectives

After completing this lab, you will be able to: 
- Configure webpack and Babel and create a deploy package for a web project.


#### Lab Setup

Estimated Time: **45 minutes**

### Exercise 1: Creating Deploy Package Using Webpack

#### Scenario

In this exercise, you will add webpack and configure it on the ContosoConf project.

First, you will install the webpack package in the solution. You will then configure it to create a bundle file for all your JS files. Then, you will add Babel to your solution to create a cross-platform package.

Next, you will run webpack to create a deploy package.

Finally, you will run the application and verify that the site remains the same with the bundle file.

#### Task 1: Install and configure babel and webpack.

1.	Start Visual Studio and open the **ContosoConf.sln** solution from the **Allfiles\Mod15\Labfiles\Starter** folder.
2.  Creat **package.json** file on your project
3.  Use **CMD** to install the folowing packages **babel-core babel-loader babel-preset-es2015 webpack** in developer mode
4.  In your project root creat **webpack.config.js** file.
5.  Configure webpack and pass entry with object to include all javascript imported in html files
    ```json
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
6.  Configure output filename to creat file per entry
    ```json
        filename: '[name].bundle.js',
    ```

#### Task 2: Create bundel files and replace javascript.

1.  Run **npm run webpack**.
2.  Replace all scripts in html files to import the new bundel files
3.  Run the application, the application shuled work as before and suppert previous version explorer 

>**Results:** After completing this exercise, you will have a new **bundel.js** files support es5 for older explorer 

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

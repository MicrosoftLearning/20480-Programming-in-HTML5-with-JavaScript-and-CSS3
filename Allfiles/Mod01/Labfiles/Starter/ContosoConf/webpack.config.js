var path = require('path');
var webpack = require('webpack');

module.exports = {
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
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js',
        publicPath: '/dist/'
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
    devtool: 'source-map',
    mode: 'production'
};
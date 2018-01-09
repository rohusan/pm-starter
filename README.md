# Prose Mirror build process and example code

## Purpose

[Prose Mirror](https://prosemirror.net/) is a very promising rich-text editor for the web. It's more a library than a complete editor out of the box.

You need a build system like browserify, webpack or rollup to use it in a browser. It took me some time to understand how to proceed to run the examples. This code is for my own understanding and it might help others as well.

## Problem

We are used to include some js scripts from a cdn server and try it out instantly. ProseMirror works differently as it has many es6 modules which needs to be bundled or loaded dynamically through node server. Setting up the dev environment [didn't work out for me](https://discuss.prosemirror.net/t/setting-up-dev-environment-fails/1078).

My goal is to have one ProseMirror core file with all dependencies. This file can than be loaded in the browser and used for the example codes. Most important part: no further building is needed.


## Start instantly

Clone this repository to your web server. Things are already bundled in the dist directory. Point your browser to .../dist/example/.


## Build javascript

The hard part was to find out how to build and split the core.

Have a look to those files:
- package.json
- rollup/*

Make sure nodejs is installed. Enter the root directory of this repository and type ``npm install``. For building type ``npm run build-basic1`` or ``npm run build-basic2``

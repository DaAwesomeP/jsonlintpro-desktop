# ![Logo](https://raw.githubusercontent.com/DaAwesomeP/jsonlintpro-desktop/master/images/logo/App%20Icon%2064x64.png) JSON Lint Pro for Desktop
[![Release](http://img.shields.io/github/release/DaAwesomeP/jsonlintpro-desktop.svg?style=flat)](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases)
 [![License](http://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/DaAwesomeP/jsonlintpro-desktop/blob/master/LICENSE)
 [![Travis CI](http://img.shields.io/travis/DaAwesomeP/jsonlintpro-desktop.svg?style=flat)](https://travis-ci.org/DaAwesomeP/jsonlintpro-desktop)
 [![Gemnasium](http://img.shields.io/gemnasium/DaAwesomeP/jsonlintpro-desktop.svg?style=flat)](https://gemnasium.com/DaAwesomeP/jsonlintpro-desktop)
 [![Gitter chat](http://img.shields.io/badge/gitter-open-1DCE73.svg?style=flat)](https://gitter.im/DaAwesomeP/jsonlintpro-desktop)


Simply, [JSON Lint Pro](http://pro.jsonlint.com/) ported to NodeJS with `node-webkit` from its [source](https://github.com/arc90/jsonlintpro).

![jsonlintpro-desktop-win32-0 0 1-screenshot](https://cloud.githubusercontent.com/assets/4472083/3122936/6248ca1e-e76d-11e3-8cfa-515350a91f50.PNG)

## Pre-built Releases

### [v0.0.1 (Prerelease)](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases/tag/v0.0.1)
#### Downloads

 - Windows 32-bit (portable): [jsonlintpro-desktop-win32-0.0.1.zip](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases/download/v0.0.1/jsonlintpro-desktop-win32-0.0.1.zip)
 - Mac OSX: [jsonlintpro-desktop-mac-0.0.1.zip](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases/download/v0.0.1/jsonlintpro-desktop-mac-0.0.1.zip) (untested)
 - Linux 32-bit: [jsonlintpro-desktop-linux32-0.0.1.tar.gz](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases/download/v0.0.1/jsonlintpro-desktop-linux32-0.0.1.tar.gz) (untested)
 - Linux 64-bit: [jsonlintpro-desktop-linux64-0.0.1.tar.gz](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases/download/v0.0.1/jsonlintpro-desktop-linux64-0.0.1.tar.gz) (untested)

#### Notes
 - **Tested on Windows only.**
 - No Linux installer yet (`deb` and `rpm`).
 - DMG for OSX (instead of ZIP) coming soon.

## Building
You will need [NodeJS](http://nodejs.org/download/) version 0.10.0 or greater and NPM (bundled with NodeJS).

### Latest Release
```
$ git clone https://github.com/DaAwesomeP/jsonlintpro-desktop.git && git checkout v0.0.1 -b master
$ npm install && grunt build
```
It will create a folder named `build` with Windows (32-bit) binary, the OSX app, and Linux 32-bit and 64-bit builds.

### Latest Unreleased
```
$ git clone https://github.com/DaAwesomeP/jsonlintpro-desktop.git
$ npm install && grunt build
```
It will create a folder named `build` with Windows (32-bit) binary, the OSX app, and Linux 32-bit and 64-bit builds.

# TODO

 - Open, save, compare, and edit files right from the validator **(in progress, [issue #2](https://github.com/DaAwesomeP/jsonlintpro-desktop/issues/2))**
 - NPM
 - Maybe GitHub Pages
 - Windows Installer
 - Ubuntu APT repository
 - Raspberry Pi testing (ARM)

## License

The MIT License (MIT)

Copyright (c) 2014 P THE AWESOME

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

![](https://d2weczhvl823v0.cloudfront.net/DaAwesomeP/jsonlintpro-desktop/trend.png)

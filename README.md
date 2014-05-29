JSON Lint Pro for Desktop ![Release](http://img.shields.io/github/release/DaAwesomeP/jsonlintpro-desktop.svg?style=flat) ![Release](http://img.shields.io/badge/license-MIT-red.svg?style=flat) [![Gitter chat](https://badges.gitter.im/DaAwesomeP/jsonlintpro-desktop.png)](https://gitter.im/DaAwesomeP/jsonlintpro-desktop)
=========================

Simply, [JSON Lint Pro](http://pro.jsonlint.com/) ported to NodeJS with `node-webkit` from its [source](https://github.com/arc90/jsonlintpro).

## Pre-built Releases

### v0.0.1 (Prerelease)
#### Downloads

 - Windows (32-bit): [jsonlintpro-desktop-win32-0.0.1.zip](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases/download/v0.0.1/jsonlintpro-desktop-win32-0.0.1.zip)
 - Mac OSX: [jsonlintpro-desktop-mac-0.0.1.zip](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases/download/v0.0.1/jsonlintpro-desktop-mac-0.0.1.zip) (untested)
 - Linux 32-bit: [jsonlintpro-desktop-linux32-0.0.1.tar.gz](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases/download/v0.0.1/jsonlintpro-desktop-linux32-0.0.1.tar.gz) (untested)
 - Linux 64-bit: [jsonlintpro-desktop-linux64-0.0.1.tar.gz](https://github.com/DaAwesomeP/jsonlintpro-desktop/releases/download/v0.0.1/jsonlintpro-desktop-linux64-0.0.1.tar.gz) (untested)

#### Notes
 - **Tested on Windows only.**
 - No Linux installer yet (`deb` and `rpm`).
 - DMG for OSX (instead of ZIP) coming soon.

## Building
You will need NodeJS and NPM.
```shell
$ npm install
$ grunt
```
It will create a folder named `build` with Windows (32-bit) binary, the OSX app, and Linux 32-bit and 64-bit builds.

# TODO

 - Pre-built Releases/Binaries
 - NPM
 - Maybe GitHub Pages
 - Windows Installer
 - Ubuntu APT repository
 - Raspberry Pi testing

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

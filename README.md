## Development dependencies

If you want to hack on this locally:
 - Ubuntu/Debian sudo apt-get install poppler-utils.
 - MacOSX sudo port install poppler or brew install xpdf.
 - Windows download and install Xpdf.

## Setup

    $ heroku create
    $ heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git
    $ git push heroku master

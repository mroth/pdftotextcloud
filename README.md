## Development dependencies

If you want to hack on this locally:
 - Ubuntu/Debian sudo apt-get install poppler-utils.
 - MacOSX sudo port install poppler or brew install xpdf.
 - Windows download and install Xpdf.

## Setup

    $ heroku create
    $ heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git
    $ heroku config:add PATH=/app/vendor/poppler/bin:/app/bin:/app/node_modules/.bin:bin:node_modules/.bin:/usr/local/bin:/usr/bin:/bin
    $ git push heroku master

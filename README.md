# pdftotextcloud

I sometimes want to extract text from a PDF in a hack of mine.  The dependencies to do so can be a bit annoying to set up, especially in some hosted environments. Most of the off-the-shelf solutions are janky and/or expensive. Thus, here is a quick pdftotext as a web service friendly for hackers.

You can use my demo instance for free or quickly deploy your own.  pdftotextcloud is non-blocking and designed to be run efficiently on a free Heroku dyno.


## Setup
You'll need heroku-toolbelt. Clone this repo and then go into it.

    $ heroku create
    $ heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git
    $ heroku config:add PATH=/app/vendor/poppler/bin:/app/bin:/app/node_modules/.bin:bin:node_modules/.bin:/usr/local/bin:/usr/bin:/bin
    $ git push heroku master

## Development dependencies

If you want to hack on this locally you'll additionally need NodeJS/NPM and a copy of `pdttotext` in your path.  To get `pdftotext`:
 - Ubuntu/Debian `sudo apt-get install poppler-utils`.
 - MacOSX `sudo port install poppler` or `brew install xpdf`.
 - Windows download and install Xpdf.

Then do a `npm install`, etc etc.

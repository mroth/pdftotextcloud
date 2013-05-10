# pdftotextcloud

I sometimes want to extract text from a PDF in a project of mine.  The dependencies to do so can be annoying to set up, especially in many hosted environments. Most of the existing off-the-shelf solutions are incredibly janky and/or expensive. Thus, here is a quick "pdftotext as a web service" made friendly for hackers.

You can use my demo instance for free or quickly deploy your own.  **pdftotextcloud** is non-blocking and designed to run efficiently on a single free Heroku dyno.


## Setup
You'll need [heroku-toolbelt](https://toolbelt.heroku.com/). Clone this repo and then from the directory.

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

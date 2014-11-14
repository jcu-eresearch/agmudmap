Background
==========

This site, https://agmudmap.org is an interactive, one-page site using
static files and the `Leaflet <http://leafletjs.org>`_ mapping library to
*map* data points to pixels on an arbitrary non-georeferenced image.  Leaflet
includes a special Coordinate Reference System (CRS), called ``L.CRS.Simple``
for mapping lat-long coordinates to pixels, and we use this to place our
image.  Data points thus correspond to pixel coordinates in the image and we
draw in a static GeoJSON data set to display.

Helpful resources include:

* http://omarriott.com/aux/leaflet-js-non-geographical-imagery/
* Tileup: https://github.com/rktjmp/tileup (although I ended up just using
  Leaflet's ``L.imageOverlay`` because it's quicker and ended up with a
  smaller filesize anyway)


Installation
============

Run the following to pull in npm, grunt, bower, bower's dependencies and
libraries and finally build the resulting files in ``build/``.

::

   cd agmudmap
   npm install
   bower install
   grunt
   ls build/

If you'd like to develop functionality further, and avoid optimising and
combining JavaScript files, run this instead::

   grunt dev

Regenerating the data.js file
=============================

This requires Python and virtualenv and produces a AMD/RequireJS module as a
result (containing GeoJSON)::

   virtualenv .
   . bin/activate
   pip install -r requirements.txt
   python csv2geojson.py

Production
==========

Just copy the static files onto the main webserver::

   scp -r build/* www.example.org:/srv/agmudmap.org

Todo
====

* Investigate browserify


Licence
=======

Copyright (c) 2014 David Beitey, eResearch Centre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


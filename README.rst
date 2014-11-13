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

   scp -r build/* www.hpc.jcu.edu.au:/opt/agmudmap.org

Todo
====

* browserify
* Tidy up JS code for customisation and requirejs



Installation and development
============================

Run the following to pull in npm, grunt, bower, bower's dependencies and
libraries and finally build the resulting files in ``build/``.

::

   cd agmudmap
   npm install
   bower install
   grunt
   ls build/

Regenerating the data.js file
=============================

This requires Python and virtualenv::

   virtualenv .
   . bin/activate
   pip install -r requirements.txt
   python csv2geojson.py

Production
==========

Just copy the static files onto the main webserver::

   scp build/* www.hpc.jcu.edu.au:/opt/agmudmap.org

Todo
====

* browserify
* Tidy up JS code for customisation and requirejs



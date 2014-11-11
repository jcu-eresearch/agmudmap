# coding: utf-8
import csv
from geojson import Feature, Point, FeatureCollection

with open('../resources/data-points.csv', 'rb') as data_file:
    data_points = list(csv.DictReader(data_file))

features = []
for data in data_points:
    feature = Feature(geometry=Point((int(data['x']), int(data['y']))),
                      properties={key: data[key] for key in data
                                  if key not in ('x', 'y')})
    features.append(feature)

output = 'var geojson = %s;' % str(FeatureCollection(features))

with open('data.js', 'wb') as geojson_file:
    geojson_file.write(output)

print("Wrote GeoJSON to the file.")

import numpy as np
import json
from sklearn.feature_extraction.text import TfidfTransformer
import sys

with open('train.json', encoding = 'utf-8') as inaf:
    train = json.load(inaf)
with open('test.json', encoding = 'utf-8') as inf:
    test = json.load(inf)


classes = [item['cuisine'] for item in train]
ingredients = [item['ingredients'] for item in train]
unique_ingredients = set(item for sublist in ingredients for item in sublist)
unique_cuisines = set(classes)

print(ingredients[0])

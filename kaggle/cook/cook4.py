import numpy as np
import json
from sklearn.feature_extraction.text import TfidfTransformer
import sys


with open('train.json',encoding= 'utf-8') as data_file:
    data = json.load(data_file)
print(data[0])

import numpy as np
import urllib.request
from sklearn import preprocessing
from sklearn import metrics
from sklearn.ensemble import ExtraTreesClassifier
# url with dataset
url = "http://archive.ics.uci.edu/ml/machine-learning-databases/pima-indians-diabetes/pima-indians-diabetes.data"
# download the file
raw_data = urllib.request.urlopen(url)
# load the CSV file as a numpy matrix
dataset = np.loadtxt(raw_data, delimiter=",")
# separate the data from the target attributes
print(type(dataset))
X = dataset[:,0:7]
y = dataset[:,8]


# normalize the data attributes
normalized_X = preprocessing.normalize(X)
#print(normalized_X)

# standardize the data attributes
standardized_X = preprocessing.scale(X)
#print(standardized_X)

model = ExtraTreesClassifier()
model.fit(X, y)
# display the relative importance of each attribute
print(model.feature_importances_)
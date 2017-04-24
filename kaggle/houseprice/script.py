# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load in 

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)

# Input data files are available in the "../input/" directory.
# For example, running this (by clicking run or pressing Shift+Enter) will list the files in the input directory

from subprocess import check_output
##print(check_output(["ls", "../input"]).decode("utf8"))

# Any results you write to the current directory are saved as output.

import random as rnd

# visualization
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib import figure

#%matplotlib inline

# machine learning
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC, LinearSVC
from sklearn.ensemble import RandomForestRegressor
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import Perceptron
from sklearn.linear_model import SGDClassifier
from sklearn.tree import DecisionTreeClassifier



train = pd.read_csv("train.csv")
test = pd.read_csv("test.csv")


print(train.head())

data=pd.concat((train.loc[:,'MSSubClass':'SaleCondition'],\
                test.loc[:,'MSSubClass':'SaleCondition']))

data=pd.get_dummies(data)
data.shape

data=data.fillna(data.mean())
data.describe()
data.info()

xtrain=[train['Id'],data[:train.shape[0]],train['SalePrice']]
print(train.shape[0])
print(len(train['Id']))
ntrain=pd.concat(xtrain,axis=1)
print(ntrain.head())

xtest=[test['Id'],data[train.shape[0]:]]
print(len(data[train.shape[0]:])==test.shape[0])
ntest=pd.concat(xtest,axis=1)
print(ntest.head())

X_train=ntrain.loc[:,'MSSubClass':'SaleCondition_Partial']
Y_train=ntrain.loc[:,'SalePrice']
X_test=ntest.loc[:,'MSSubClass':'SaleCondition_Partial']

# Random Forest

random_forest = RandomForestRegressor(n_estimators=2900)
random_forest.fit(X_train, Y_train)
Y_pred = random_forest.predict(X_test)
random_forest.score(X_train, Y_train)
acc_random_forest = round(random_forest.score(X_train, Y_train) * 100, 2)
print(acc_random_forest)


submission = pd.DataFrame({"Id": ntest['Id'],"SalePrice": Y_pred})
    
print(submission)
submission.to_csv('submission.csv', index=False)

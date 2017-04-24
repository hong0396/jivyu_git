import pandas as pd
import numpy as np
from sklearn.tree  import DecisionTreeClassifier
from sklearn.cross_validation import train_test_split


train = pd.to_csv('train.csv')
test = pd.to_csv('test.csv')
train_x = pd.get_dummies(train.loc[:,'MSSubClass':'SaleCondition'])
train_y = train.loc[:,'SalePrice']
test_x = pd.get_dummies(test.loc[:,'MSSubClass':'SaleCondition'])
test_y = test.loc[:,'SalePrice']
train_x=train_x.fillna(train_x.mean())
test_x=test_x.fillna(test_x.mean())
X_train, X_target_test, Y_train, Y_target_test = train_test_split(train_x, train_y)

random_forest = RandomForestRegressor(n_estimators=2900)
random_forest.fit(X_train, Y_train)
test_pred = random_forest.predict(X_target_test)

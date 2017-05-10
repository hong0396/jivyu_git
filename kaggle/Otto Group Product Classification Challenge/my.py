# Training set has 61878 rows and 95 columns

import csv
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import log_loss
from sklearn.cross_validation import KFold
import pandas as pd
import numpy as np
from scipy.stats import skew
import xgboost as xgb
from sklearn.cross_validation import KFold
from sklearn.ensemble import ExtraTreesRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
from sklearn.linear_model import Ridge, RidgeCV, ElasticNet, LassoCV, Lasso
from math import sqrt
from sklearn.cross_validation import cross_val_score
from sklearn import svm


train=pd.read_csv("train.csv")
x=train.iloc[:, 1:-1]
y=train.iloc[:, -1].str[-1]


s = StandardScaler()
x = s.fit_transform(x)
y= np.array([float(i) for i in list(y)])

#print(y)
#ntrain=train.shape[0]
#kf = KFold(ntrain, n_folds=10, shuffle=True, random_state=0)
def get(clf):
    metric = cross_val_score(clf, x, y, cv=5)
    print(metric)
    print(metric.mean())
    return metric

def _get(clf):
    metric = cross_val_score(clf, x, y, cv=5, scoring="f1_weighted")
    print(metric)
    print(metric.mean())
    return metric


#get(RandomForestClassifier(n_estimators=50))
xgb_params = {
    'seed': 0,
    'colsample_bytree': 0.7,
    'silent': 1,
    'subsample': 0.7,
    'learning_rate': 0.075,
    'objective': 'reg:linear',
    'max_depth': 4,
    'num_parallel_tree': 1,
    'min_child_weight': 1,
    'eval_metric': 'rmse',
    'nrounds': 500
}

param = {}
param['booster'] = 'gbtree'
param['objective'] = 'binary:logistic'
param["eval_metric"] = "error"
param['eta'] = 0.3
param['gamma'] = 0
param['max_depth'] = 6
param['min_child_weight']=1
param['max_delta_step'] = 0
param['subsample']= 1
param['colsample_bytree']=1
param['silent'] = 1
param['seed'] = 0
param['base_score'] = 0.5




get(xgb.XGBClassifier())
#xgb.train(xgb_params, xgb.DMatrix(x, label=y), num_boost_round=10)
#sqrt(mean_squared_error(y_train, et_oof_train)


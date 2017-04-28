from sklearn.model_selection import train_test_split
import xgboost as xgb
import pandas as pd
from sklearn.ensemble import GradientBoostingRegressor, \
    AdaBoostRegressor, RandomForestRegressor



X = pd.read_csv('train.csv')
y = X['SalePrice']
X.drop

# Make a validation set
X_train, X_validation, y_train, y_validation = train_test_split(X, 
                                                                y, 
                                                                random_state=1848)

# Sci-Kit Learn's Out of the Box Gradient Tree Implementation
sklearn_boost = GradientBoostingRegressor(random_state=1849)
sklearn_boost.fit(X_train, y_train.values.ravel())
print('Training Error: {:.3f}'.format(1 - sklearn_boost.score(X_train, 
                                                              y_train)))
print('Validation Error: {:.3f}'.format(1 - sklearn_boost.score(X_validation, 
                                                                y_validation)))
sklearn_boost.fit(X_train, y_train.values.ravel())

#
# Training Error: 0.031
# Validation Error: 0.110
# 1 loop, best of 3: 1.23 s per loop

# XGBoost
xgb_boost = xgb.XGBRegressor(seed=1850)
xgb_boost.fit(X_train, y_train.values.ravel())
print('Training Error: {:.3f}'.format(1 - xgb_boost.score(X_train, 
                                                          y_train)))
print('Validation Error: {:.3f}'.format(1 - xgb_boost.score(X_validation, 
                                                            y_validation)))
%timeit xgb_boost.fit(X_train, y_train.values.ravel())
#
# Training Error: 0.038
# Validation Error: 0.111
# 1 loop, best of 3: 443 ms per loop


# Sci-Kit Learn's Adaptive Boosting
ada_boost = AdaBoostRegressor(random_state=1851)
ada_boost.fit(X_train, y_train.values.ravel())
print('Training Error: {:.3f}'.format(1 - ada_boost.score(X_train, 
                                                          y_train)))
print('Validation Error: {:.3f}'.format(1 - ada_boost.score(X_validation, 
                                                            y_validation)))
ada_boost.fit(X_train, y_train.values.ravel())
# Training Error: 0.126
# Validation Error: 0.196
# 1 loop, best of 3: 729 ms per loop
# Random Forest: A fast, non-boosting algorithm
random_forest = RandomForestRegressor(random_state=1852)
random_forest.fit(X_train, y_train.values.ravel())
print('Training Error: {:.3f}'.format(1 - random_forest.score(X_train, 
                                                              y_train)))
print('Validation Error: {:.3f}'.format(1 - random_forest.score(X_validation, 
                                                                y_validation)))
random_forest.fit(X_train, y_train.values.ravel())
# Training Error: 0.024
# Validation Error: 0.128
# 1 loop, best of 3: 398 ms per loop

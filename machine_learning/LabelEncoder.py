from sklearn import preprocessing
le = preprocessing.LabelEncoder()

####################
le.fit([1, 2, 2, 6])
print(le.classes_)
print(le.transform([1, 1, 2, 6]))
print(le.inverse_transform([0, 0, 1, 2]))

#####################
list = ['PLACE', 'JOBTITLE', 'CONCEPT', 'ORGANISATION', 'PERSON', 'EVENT', 'WORK']
le.fit(list)
print(le.classes_)
print(le.transform(['PLACE', 'CONCEPT', 'CONCEPT', 'CONCEPT']))

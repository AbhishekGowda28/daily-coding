import os

environVars = os.environ

for var in environVars:
    if(var!="PATH"):
        print("{0} : {1}".format(var,environVars[var]))


input()

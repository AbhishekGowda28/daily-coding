message = """ IP address ranging from 1.0.0.0 to 255.255.255.255"""
print(message)
fileName = r"C:\Users\abhig\Desktop\python\learning\ipaddress.txt"
file = open(fileName, "w")
for i in range(1,226):
       for j in range(1,226):
              for k in range(1,226):
                     for l in range(1,226):
                            print(i,".",j,".",k,".",l,end=" ", file=file)

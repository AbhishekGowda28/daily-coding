import psutil as P

for pid in P.pids():
    print(P.Process(pid))

input()
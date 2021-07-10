import webbrowser
import sys
import random
import time




def openFolder(folderName):
    webbrowser.open(folderName)


if(len(sys.argv) == 1):
    print("""Choice from the options\n1. songs\n2. project\n3. onePiece\n4. business\n5. bank""")
    folderName = str(input("Enter the folderName : "))
else:
    folderName = sys.argv[1]


songs = ["1", "songs", "song", "videos", "video", "videosong", "videosongs"]
project = ["2", "project", "idea", "ideas", "future plan",
           "future", "plan", "plans", "dailyPlanner.xlsx", "dailyplanner", "money", "money manager"]
onePiece = ["3", "op", "one piece", "one piece"]
business = ["4", "invest", "business", "stocks"]
bank = ["5", "bank", "account", "adb", "savings",
        "bankaccountdetails", "bank details", "account details"]

if(folderName in songs):
    # d = webbrowser.open('file:///f:/videos/songs/NattiNatasha')
    openFolder("file:///f:/videos/songs/")
elif(folderName in project):
    openFolder("file:///C:/Users/abhig/Desktop/dailyPlanner.xlsx")
elif(folderName in onePiece):
    openFolder("file:///F:/Videos/Anime/OnePiece")
elif(folderName in business):
    openFolder("file:///F:/Business")
elif(folderName in bank):
    openFolder("file:///C:/Users/abhig/Desktop/bankAccountDetails")
else:
    print("Cannot OPEN the specified file `%s`. \nUse File Explorer" % (folderName))
    time.sleep(2)
    openFolder("file:///C:/")

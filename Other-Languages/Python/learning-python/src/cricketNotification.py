import time
from win10toast import ToastNotifier
from twilio.rest import Client
from pycricbuzz import Cricbuzz


def liveCricketScore():

    toaster = ToastNotifier()

    cric = Cricbuzz()
    matches = cric.matches()

    print("Raw (before filtering) details of the current matches", matches)

    message = "No match in progress"

    if len(matches) == 0:
        toaster.show_toast("Live Score", message)
        time.sleep(6000)
    else:
        matches = filter(None, matches)
        for match in matches:
            if 'mchstate' in match:
                if match['mchstate'] == "inprogress":
                    id = match['id']
                    main = cric.livescore(id)
                    ms = main["batting"]["score"][0]
                    bat1 = main["batting"]["batsman"][0]
                    bat2 = main["batting"]["batsman"][1]
                    print("Batsman : ", bat1, bat2)
                    message = match["src"] + "  "+"Format: "+match["type"]+".\nScore: "+main["batting"]["team"]+" "+ms['runs']+"/" + \
                        ms['wickets']+" ("+ms["overs"]+").\n"+bat1["name"]+": "+bat1["runs"] + \
                        "("+bat1["balls"]+")\t" + \
                        bat2["name"]+": "+bat2["runs"]+"("+bat2["balls"]+")"

        toaster.show_toast("Live Score", message)
        time.sleep(60)


while True:
    liveCricketScore()

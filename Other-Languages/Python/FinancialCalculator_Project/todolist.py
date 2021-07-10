def date_view():
	print (" You have selected date view ")
	
def tag_view():
	print (" You have selected tag view ")

def view(choice):
	if choice == '1':
		date_view()
	if choice == '2':
		tag_view()

		
		


def main():
	choice_selection = " 1 -> Date View\n 2 -> Tag View"
	print (choice_selection)
	choice = input()
	view(choice)


	
if __name__ == "__main__":
	main()

	
	

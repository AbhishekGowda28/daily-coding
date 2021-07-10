count = 0
priority = """
1. A
2. B
3. C
4. D
5. E
"""


def main():
	counter()

def counter():
		if count == 0:
			print("Do you want to add a task")
			ch = input('--->')
			if ch.upper() == 'Y':
				print("Enter the contents")
				add_contents()
			else:
				print("Try to rember any task you have missed :)")
		else:
			print ("Today's task:")

def add_contents():
	print('Name of the task')
	input('TASK->')
	print('Choose the priority', priority)
	Priotrity_number = input('PRIORITY->')
	Priotrity_number = int(Priotrity_number,16)
	print(Priotrity_number)
			
if __name__ == "__main__":
	main()
def main():
	income_calc()
	expense_calc()

def income_calc():
	Total_Earned_Income = Earned_income()
	Total_Passive_Income = Passive_income()
	Total_Income = Total_Earned_Income + Total_Passive_Income
	print('The total income is',Total_Income)
	Income_compare(Total_Earned_Income,Total_Passive_Income)	
		
def Earned_income():
	Earned = []
	Total_Earned_Income = 0
	print('Income')
	print("Enter number of earned incomes")
	Earned_Income_number = input('Number of earned income ->')
	Earned_Income_number = eval(Earned_Income_number)
	for i in range(0, Earned_Income_number):
		print('Earned Income %d', i+1)
		Earned.append(i)
		Earned[i] = input('-----Earned Income ->')
	for i in Earned:
		Total_Earned_Income = Total_Earned_Income + int(i)
	print('The total Earned Income is',Total_Earned_Income)
	return Total_Earned_Income
	
def Passive_income():
	Passive = []
	Total_Passive_Income = 0
	print('Income')
	print("Enter number of Passive incomes")
	Passive_Income_number = input('Number of Passive income ->')
	Passive_Income_number = eval(Passive_Income_number)
	for i in range(0, Passive_Income_number):
		print('Passive Income %d', i+1)
		Passive.append(i)
		Passive[i] = input('-----Passive Income ->')
	for i in Passive:
		Total_Passive_Income = Total_Passive_Income + int(i)
	print('The total Passive Income is',Total_Passive_Income)
	return Total_Passive_Income

def Income_compare(Total_Earned_Income,Total_Passive_Income):
	if Total_Passive_Income <= Total_Earned_Income:
		print('Please try to increase you passive income')
	else:
		print('Keep up the good work :)')

def expense_calc():
	print("Expenses")
	print('Do you have an expense to add')
	expense_question = '''\n1.Yes or 2.NO'''
	expense_question = input('expense_question ->')
	if expense_question.upper() == 'Y':
		print('OOOOOOOOOOOOOOO')

		
if __name__ == '__main__':
	main()

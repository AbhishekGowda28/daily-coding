#include<iostream>
using namespace std;
/*int countDigit(int n)
{
  int i=0;
  while(n>0)
    {
      n=n/10;
      i++;
    }
  return i;
}
long power(int x,int y)
{
  int t = x;
  if(y == 0)
    return 1;
  else if(y == 1)
    return x;
  else
    while(y>1)
      {
	t = t*x;
	y--;
      }
  return t;
}
long reverse(int n)
{
  int i=countDigit(n);
  long sum =0;
  while(i>0)
    {
      int rem = n%10;
      n = n/10;
      sum = sum + (rem * power(10,i-1));
      i--;
    }
  return sum;
}
*/
long reverse(int n)
{
  long sum =0;
  while(n>0)
    {
      sum = 10*sum + n % 10;
      n = n/10;
    }
  return sum;
}


main()
{
  //    cout << "Number->"<<(91*99)<<" Reverse"<<reverse(91*99);
  int large = 0;
  int counter =0;
  int I,J;
  cout << "Enter the range";
  cin>>I>>J;
  for(int i=I;i<=J;i++)
    {
      for(int j=I;j<=J;j++)
	{
	  int n = i*j;
	  int temp = reverse(n);
	  if(n == temp)
	    {
	      if(large < n)
		{
		  large = n;
		  counter++;
		  cout << n << "->" << temp<<endl;
		}
	    }
	}
    }
  cout <<"Number of palindromes are " <<counter<<endl;
  cout << "Largest palindrome is " << large<<endl;
}

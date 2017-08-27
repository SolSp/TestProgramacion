//El siguiente código encuentra los números primos mayores a 2

#include <iostream>
#include <math.h>
using namespace std;

bool xyz(int n){

	float i = sqrt(n); //raiz cuadrada de n en decimales (float)
	int j = ceil(i);   //redondea hacia arriba ejm: 2.3->3,3.5->4
	int k = 2;         
	int x = k;

	while (x <= j)
	{
		if (!(n%x)) 
			return false;
		else x++;
	}
	return true;
}
int main()
{
	for (int i = 3; i < 50; i++)
		cout << i<<": " << xyz(i)<<endl;
	return 0;
}

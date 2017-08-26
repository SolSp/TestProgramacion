//Encuentra los números primos mayores a 2

bool xyz(int n){

	float i = sqrt(n); //raiz cuadrada de n en decimales (float)
	int j = ceil(i);   //redondea hacia arriba ejm: 2.3->3,3.5->4
	int k = 2;         
	int x = k;

	while (x <= j)
	{
		if (!(n%x))   // Si el modulo de n entre x es igual a O     
			return false;
		else x++;
	}
	return true;
}
int main()
{
	for (int i = 0; i < 50; i++)
		cout << i<<": " << xyz(i)<<endl;
	return 0;
}
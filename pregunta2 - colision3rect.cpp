#include <iostream>
using namespace std;


bool colisionExist(pair<int,int> pa1, pair<int,int> pa2, pair<int,int> pa3, pair<int,int> pa4, pair<int,int> pb1, pair<int,int> pb2, pair<int,int> pb3, pair<int,int> pb4)
{
	if (((pa1.first <= pb1.first && pb1.first <= pa2.first) || (pa1.first <= pb2.first && pb2.first <= pa2.first) || (pa1.first <= pb3.first && pb3.first <= pa2.first) || (pa1.first <= pb4.first && pb4.first <= pa2.first)) &&
		((pa1.second <= pb1.second && pb1.second <= pa3.second) || (pa1.second <= pb2.second && pb2.second <= pa3.second) || (pa1.second <= pb3.second && pb3.second <= pa3.second) || (pa1.second <= pb4.second && pb4.second <= pa3.second)))
	{
		return true;
	}
	return false;
}

bool colision3Rectangles(int xa, int ya, int wa, int ha, int xb, int yb, int wb, int hb, int xc, int yc, int wc, int hc)
{
	//rectA points
	pair<int, int> pa1(xa - wa / 2, ya - ha / 2); //leftTop
	pair<int, int> pa2(xa + wa / 2, ya - ha / 2); //rightTop
	pair<int, int> pa3(xa - wa / 2, ya + ha / 2); //leftBottom
	pair<int, int> pa4(xa + wa / 2, ya + ha / 2); //rightBottom

	//rectB points
	pair<int, int> pb1(xb - wb / 2, yb - hb / 2); //leftTop
	pair<int, int> pb2(xb + wb / 2, yb - hb / 2); //rightTop
	pair<int, int> pb3(xb - wb / 2, yb + hb / 2); //leftBottom
	pair<int, int> pb4(xb + wb / 2, yb + hb / 2); //rightBottom

	//rectC points
	pair<int, int> pc1(xc - wc / 2, yc - hc / 2); //leftTop
	pair<int, int> pc2(xc + wc / 2, yc - hc / 2); //rightTop
	pair<int, int> pc3(xc - wc / 2, yc + hc / 2); //leftBottom
	pair<int, int> pc4(xc + wc / 2, yc + hc / 2); //rightBottom


	int countCollisions = 0;	
	if (colisionExist(pa1, pa2, pa3, pa4, pb1, pb2, pb3, pb4)) countCollisions++; 
	if (colisionExist(pa1, pa2, pa3, pa4, pc1, pc2, pc3, pc4)) countCollisions++;
	if (countCollisions == 2) return true;
	if (colisionExist(pb1, pb2, pb3, pb4, pc1, pc2, pc3, pc4)) countCollisions++;

	if (countCollisions == 2) return true;

	return false;
}

int main()
{
	cout << colision3Rectangles(2,2,4,4,5,2,4,4,8,5,6,6);
	return 0;
}
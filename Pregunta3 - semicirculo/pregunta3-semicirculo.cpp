#include <GL/glew.h>
#include <GL/glut.h>
#include <iostream>
#include <vector>


using namespace std;
using std::vector;
#define heightWindow 500
#define widthWindow 500

//Parametros:
int n = 10;
double r = 80.0;
double x = 0.0;
double y = 0.0;

struct point {
	double x;
	double y;
};

vector<struct point> arr(heightWindow);
void renderScene();

int main(int argc, char **argv)
{
	//Calculo:
	double k = 0.0;
	double pi = 3.1415;
	double ang = (pi* (180 / n)) / 180;

	for (struct point& i : arr) {
		i.x = r * cosf(k) + x;
		i.y = r * sinf(k) + y;
		k+=ang;
		if (k > pi)
		{
			k = 0;
			break;
		}
	}
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DEPTH | GLUT_DOUBLE | GLUT_RGBA);
	glutInitWindowPosition(100, 100);
	glutInitWindowSize(widthWindow, heightWindow);
	glutCreateWindow("Semicircle");
	glutDisplayFunc(renderScene);
	glPointSize(3.0);
	glutMainLoop();
	return 1;
}

void renderScene() {

	int j = 0;
	glClear(GL_COLOR_BUFFER_BIT);	
	glBegin(GL_POINTS);
	glColor3f(1.0, 1.0, 1.0);
	
	//Dibujar los puntos
	for (struct point& i : arr) {
		if (j < n) glVertex2f(i.x / widthWindow, i.y / heightWindow);
		else
			break;
		j++;
	}
	glEnd();
	glFinish();
	glutSwapBuffers();
}
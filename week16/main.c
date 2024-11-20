#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    int first = atoi(argv[1]);
    int second = atoi(argv[2]);

    if (first % 2 == 1)
    {
        second = -second;
    }
    int number = first + second;

    printf("The number is %d.\n", number);
}
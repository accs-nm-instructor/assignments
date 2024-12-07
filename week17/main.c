#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    int first = atoi(argv[1]);  // <-- this reads the first argument to the command
    int second = atoi(argv[2]); // <-- this reads the second argument to the command

    if (first % 2 == 1)
    {
        second = 0;
    }
    int number = first + second;

    printf("The number is %d.\n", number);
}
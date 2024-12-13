#include <stdio.h>
#include <stdlib.h>

int add_one(int x)
{
    return x + 1;
}

int subtract_one(int x)
{
    return x - 2;
}

int main(int argc, char *argv[])
{
    int input = atoi(argv[1]); // <-- this reads the argument to the command
    int output;

    if (input % 2 == 0)
        output = add_one(input);
    else
        output = subtract_one(input);

    printf("Output: %d\n", output);
}
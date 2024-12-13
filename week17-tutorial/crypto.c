#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    unsigned int first = atoi(argv[1]);  // <-- this reads the first argument to the command
    unsigned int second = atoi(argv[2]); // <-- this reads the second argument to the command

    printf("Output: %u\n", first ^ second);
}
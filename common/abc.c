

#include <stdio.h>
#include <string.h>

int main() {
    char line[100];

    printf("Enter a line: ");
    fgets(line, sizeof(line), stdin);  // Read input line

    // Check for single-line comment
    if (line[0] == '/' && line[1] == '/') {
        printf("\nOutput:\n");
        printf("The given line is a SINGLE-LINE COMMENT.\n");
    }

    // Check for multi-line comment
    else if (line[0] == '/' && line[1] == '*' && 
             line[strlen(line) - 2] == '*' && line[strlen(line) - 1] == '/') {
        printf("\nOutput:\n");
        printf("The given line is a MULTI-LINE COMMENT.\n");
    }

    // Otherwise not a comment
    else {
        printf("\nOutput:\n");
        printf("The given line is NOT a COMMENT.\n");
    }

    return 0;
}


# First Repeated Word Finder

The challenge of this problem is to find the first repeated word in a given sentence. The algorithm should return the first repeated word encountered in the sentence or undefined if no repeated word is found.

## Approach

The implemented algorithm splits the input sentence into words and then uses a frequency object to count the occurrences of each word. It iterates through the words and checks their frequency. If a word has a frequency greater than 1, it is considered the first repeated word and is returned.

## Function Details

firstRepeatedWord(sentence)
This function takes a sentence as input and returns the first repeated word.

Parameters: sentence (string) - The input sentence to find the first repeated word in.
Returns: The first repeated word (string) if found; otherwise, undefined.

## Alternative Implementation (with Hashtable)

The commented-out section in the code provides an alternative implementation of the same functionality using a hashtable. You can uncomment it and use the HashTable data structure for better performance when dealing with large sentences.

To use this implementation, uncomment the code and import the HashTable module, which should be located in the same directory as the firstRepeatedWord module.

![uml](../assets/code_challenge_newest.jpg)
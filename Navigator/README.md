# Navigator


This is a code challenge completed by Marco, Rafeal and myself to create a Navigator class that tracks the history of locations and allows for back and forward movement.

Class Description
The Navigator class is responsible for keeping track of the history of locations visited by a user. It has three methods: back(), forward(), and go().

back()
The back() method takes no arguments and returns the previous location or NULL if there is none. This method should be used when the user wants to go back to the previous location in their history.

forward()
The forward() method takes no arguments and returns the next location or NULL if there is none. This method should be used when the user wants to move forward to the next location in their history.

go()
The go() method should take a string argument representing the desired location. This method should be used when the user wants to move to a new location. It should add the new location to the history and reset the forward history.

## Usage

To use the Navigator class, create an instance of the class and call the go() method to add a new location to the history. Use the back() and forward() methods to navigate through the history.

## UML

![uml](../assets/code%20challenge%2008%20(5).jpg)



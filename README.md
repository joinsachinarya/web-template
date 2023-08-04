# Everything in javascript happens inside (global) execution context
Every execution context has two components in it : 
1-Variable evironment (Memory): whrere all variables and functions are stored as key value pair
2-Thread of execution (Code): where all the code execution happens line by line


## JS is synchronous single threaded language : 
that means it can execute one command at a time in a specific order that means it can go to the next line when current line has finished executing

## HOISTING: 
In JS hoisting is a process where interpreter appears to move the the declaration of functions, variables or classes to the top of their scope, even befor the execution.

## Parameter vs Arguments:
When we declare a function we pass some variable or placeholder in it. it is known as parameter
when we call that function we pass some value to that function that is known as argumentsx  

# Scope
Where a varible or a functions can be accessed in our code is considered it's scope

# Lexical environment
Lexical evironment of a variable is the Local memory alongwith lexical enviornment of it's (lexical) parent
-> Lexical meaning is "in hierarchy"

# Scope chain 
Scope chain is the chain of all the lexical environment at the parent reference

# Let and Const declaration also hoisted
but we cannot access them before we initialize some value to it. Let and const declaration are not attatched to "globle" unlike var but for them 
separate memory space is created (script)
 
 # Temporal deadzone
 Temporal deadzone is the time between, since then the let/const variable are hoisted and,  till it's initialized some value in it.

 -> The time between the hoisting and initialization


 # Error
 SyntaxError: When we don't follow the rule of the programming language
 TypError: When we try to do an operation on a variable which is not the expected type
 ReferenceError: When we try to access the variable or function which is not defined or not in the scope

 ## CLOUSER: function alongwith it's lexical scope forms a clouser
 ## CLOUSER: clouser is function bundled together with it's (lexical environment) sorrounding state
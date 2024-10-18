Requirements:
Do not use libraries or frameworks
Consider edge cases
Consider performance
Briefly explain the solution

1) Write a function that meets the following test cases:
  a. sum(1,2) => 3
  b. sum(1)(2) => 3
  c. sum(1,a) => “second parameter is not a number”
  d. sum(1)(a) => “second parameter is not a number”

2) Given a list of users with their login history. Write a function that determines if any user was logged in within the last 30 minutes
  a. The function must receive one parameter:
    - `$users`: an array of objects, where each object has the following properties:
    - `id` (integer)
    - `login_time` (datetime): time in which the user logged in for the last time in date format
  b. The function must return true if a user logged in within the last 30 minutes

3) Write a function that determines if 2 strings are an anagram
  a. Ignore spaces in the strings
  b. Do not differentiate between upper and lower case
  c. Return true if it is an anagram and false otherwise

4) Write a function that generates a secure password. You must receive a number and generate a password of that length that meets the following requirements:
  a. At least one uppercase letter
  b. At least one lowercase letter
  c. At least one number
  d. At least one special character
  f. You must return the generated password

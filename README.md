# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Function 1 "calculateMaterials"
The parameters needed for this function is characterName, currentLevel, targetLevel, flowersOwned. 

For characterName, it needs to be data in the characters array under name key.
For currentLevel, it has to be greater or equals to 1 and less or equals to 90. It also cannot be greater than targetLevel.
For targetLevel, it has to be greater or equals to 1 and less or equals to 90. It also cannot be lesser than currentLevel.
For flowersOwned, it cannot be lesser than 0.


## Function 2 "createPost"
The parameters needed for this function is author, game, title, content. The fields should not be null or empty.


## Function 3 "filterPost"
The parameters needed for this function is game. It is reccomended to use "console.dir(filterPost(game), { depth: null });" as this will ensure you can see the data in the comments key.

For game, it needs to be data in the posts array under game key.


## Function 4 "likePost"
The parameters needed for this function is id.

For id, it needs to be data in the posts array under id key.


## Function 5 "commentPost"
The parameters needed for this function is id, username, comment.

For id, it needs to be data in the posts array under id key.


## Function 6 "getCharacterVoiceline"
The parameters needed for this function is characterName, language.

For characterName, it needs to be data in the characters array under name key.
For language, it needs to be data in the characters array under voiceLines key.


# References
Provide the references that you have used to support your assignment. 

I referred to HoyoLab website for this assignment.
"https://www.hoyolab.com/home"

I used ChatGpt to generate ideas for functions and mock data for the arrays.



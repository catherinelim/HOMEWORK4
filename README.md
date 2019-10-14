# HOMEWORK4

Minimum Requirements


Functional, deployed application.
GitHub repository with README describing project.
The first view of the application displays a button that starts the quiz.
Clicking the start button displays a series of questions.
Once the quiz begins, a timer starts.
If a question is answered incorrectly, additional time is subtracted from the timer.
The timer stops when all questions have been answered or the timer reaches 0.
After the game ends, the user can save their initials and score to a highscores view using local storage.



Bonus


Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.
Customize the application theme.
Create multiple quizzes and an option for users to choose between them.
Add the application to your portfolio.



 Psuedo code

 We need to select the elements ( the div blocks inside the HTML file), the HTML file , in javascript is an object called document,
 this object has a method called getElementById("id"),  this method allows you to select an element using its id.

 Then we need to create questions and the choices for every questions, set the correct answer. We have more than a question so we will
 need an array, every question has properties which mean that every element of the array is an object.

 then we need to create variables for starting question and the last question

 after that, create a  function that will render the question.

 this function will access the running question, then change the innerHTML of the right elements.

 RenderScore will keep track of the user's score.

 When the user clicks on the start button ,  the quizz will start.

 User will have a limited time to answer each questions then move on to the next

 after the last question,  the final score will display.
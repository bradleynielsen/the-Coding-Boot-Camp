## 5.3 Lesson Plan - Interview Blitz

### Overview
In this class, you will teach students how to tackle tech interview questions, including conceptual problems. This lecture will be based around a series of exercises rather than a goal to teach students new material – we have to show students the virtue of thinking about solving programming problems at a high level before they type even a single line of code. 

##### Instructor Priorities:

* Students should realize the importance of visualizing conceptual problems to find some adequate solutions. Even if they can’t solve a particular question with total certainty, they should know how to come up with a conceptual answer informed by thoughtful visualization.
* Students should understand that the later questions in this exercise will challenge them, but that it’s more important to visualize the problem then it is to find a correct answer. After all, if they do not think their exercises through and come up with a pseudocoded solution, they probably won’t find any adequate answers today.
* Students should come out of this class feeling more prepared for the interview experience, especially by the time they finish the last question. If anyone appears discouraged, reassure them and find out how you can help by engaging in 1:1 talks after class.

##### Instructor Notes:

* Before this class starts, tell your students to bring a pen and a notebook--they'll need it to pseudocode their work. Sure, they can do so on their computers, but having a separate medium to record their thought process will amplify the importance of high-level thinking.

* **Absolutely** go over the interview questions listed in this lesson plan. You need to be an expert on these exercises since they're going to stump a lot of your class. Make sure they don’t stump you, too!

* Expect that students will not be able to solve every problem. This is fine: it’s much more important that they at least attempt to solve it with visualization and pseudocode: how they would program a solution to the exercise if they had the time and knowhow. 

* Once again, make sure your students know they can reach out to you or a TA for help after class on the concepts you teach them.

-------

### Class Objectives

* Prepare students to answer conceptual problems with visualization.
* Reinforce visualization and pseudocoding as necessary tools for any web developer -- they’re essential for taking on any complex project as well as the tough questions they’ll attempt today (and during tech interviews).

--------

### 0. Instructor Do: Welcome Class (5 mins)
* Say your hellos and answer any questions students may have about prior classes and concepts.

### 1. Partners Do: The Virtues of Visualizing Problems (10 mins)
* Tell your students that this class will run in a different format then past lectures.
	* "Today, you're all going to take on a slew of activities based around the kinds of questions you might face in job interviews for developer positions." 

* Add in that before any of that, they'll need to review the concept of visualizing problems. 

* Have them partner up into groups of two to answer this question: What's the highest selling product in Walmart?
	* Tell them that they can't just come up with a random item and consider their response acceptable. They'll likely be flat-out wrong -- Walmart has sold millions of items over the past 50 years.
	* No Googling, either!
	* Instead, they should imagine that their life depended on giving an adequate response. 
	* Offer this tip: "Visualize yourself walking past those sliding doors and into this store. If you were making your weekly trip to Walmart, which item near the entrance would you gravitate toward? If it helps, the produce section is the first you'll see when walking into most Walmarts."


### 2. Instructor Do: Explain Visualizations (10 mins)

* Before pooling responses from each group of partners, open up your word processor of choice and increase the size of your font to 48 points. Ask five groups for their answers and type them for the rest of the class to see.
	* Also ask these groups how they came up with their solutions. How did visualization help them decide?

* After you type their responses, tell them the answer: bananas.
	* "Again, visualize yourself going into Walmart (or any supermarket). You see the produce section first and then you wonder: what's the cheapest thing in the produce section? What's the easiest thing to eat?"
	* " This is the thought process your interviewee will likely care most about. Even if you didn't answer 'bananas,' it’s more important that you **visualized** the problem and responded with something close or at least informed."

* Explain how job candidates in all fields often encounter so-called **conceptual problems**, questions that offer no certain means to find answers. "Your only recourse is to think high-level and visualize a solution. If you conceive the situation, you'll tend to find a close answer. You must visualize the problem, provide your solution and explain your thought process if you want to impress your interviewers."


### 3. Partners Do: Missing Cards (15 mins)

* Tell your class to find their partners from the last activity. Together they'll attempt to solve this next problem.

* Slack out these instructions:

	* I give you an array with 51 cards. Each card contains two properties: the suite, and the title (a string of either a number or a ranking: king, ace, so on). 

	* Fifty-two cards form a deck. But I gave you 51. One is missing! How do you find it? 
	* Try to come up with the most efficient steps to solve this. 
		* **Hint**: Using a for loop against an array of values is not the most efficient solution--what if the cards aren't sorted?

* Remind your class to visualize the problem and to think up a solution in steps. Have them write those steps out. They can even code it out in JavaScript if there's time.

### 4. Instructor Do: Go over Missing Cards (5 mins)

** TODO: Ask Ahmed if we have a solution to this question.

### 5: Instructor Do: Explain The Interview Process (10 mins)
* Spend a few minutes talking about the interview experience, but don't go too in-depth about the process (that's Career Services’ forte). 
	* Tell the class that the interview experience will differ depending on the organization and the position. That said, students should expect multiple interviews--some culture based, others tech based. 
		* Culture: A conversation focused on the candidate's personality and whether they'd make a suitable fit for the company's atmosphere.
		* Tech: Gauging the candidate's sophistication with technologies relevant to the job. 
			* An example: If a company's looking for a front-end dev, they'll want to test their candidates for HTML/CSS, JavaScript, jQuery and the works.

* If you have any interesting and/or enlightening interview experiences, then by all means share them with the class. What should they know about interviews that you wish you’d known beforehand?
	* Have some of the TAs chime in if they have any relevant interview experiences and advice.

* Tell your students that the rest of the class will be devoted to exercises based on the kind of questions they might expect in a tech interview. 

### 6. Students Do: Bash Exercise (5 mins)

* Slack out the following questions to your students. Explain that sometimes, the interviewer will want to make sure that the candidate knows basics like this before proceeding any further with more technical questions.

**Bash Questions**:

1. What is the command to create a file?

2. What is the command to create a folder?

3. What is the command to delete a file?

4. What is the command to delete a folder?

5. What is the command to move a file?

6. What is the command to copy a file?

7. What is the command to go up one directory?

8. What is the command to list the files in a directory?

9. What is the command to see what directory you are currently in?

10. What would typing `history` do?

### 7. Everyone Do: Go Over Bash Questions (3 mins)
* Call on particular students to answer the Bash questions one at a time.

**For your reference, here are the solutions**:

1. What is the command to create a file?
	>`touch <filename>`

2. What is a command to create a folder?
	> `mkdir <filename>`

3. What is the command to delete a file?
	> `rm <filename>`

4. What is the command to delete a folder?
	> `rm -R <folder`

5. What is the command to move a file?
	> `mv <filename> <destination>`

6. What is the command to copy a file?
	> `mv <filename> <name of new file>`

7. What is the command to go up one directory?
	> `cd ..` or `cd ../`

8. What is the command to list the files in a directory?
	> `ls`

9. What is the command to see what directory you are currently in?
	> `pwd`

10. What would typing ```history``` do?
	> It would list the commands that the user recently executed.

### 8. Students Do: FizzBuzz (20 mins)
* Tell students that they're now going to code out a very common programming activity: Fizz Buzz. Explain how the developer must write a script that cycles through a series of numbers and prints them out. Add in that there are a few caveats: 
	* If the number is a multiple of three, the program will print Fizz instead of the number.
	* Likewise, if the number is a multiple five, the program will print Buzz. 
	* What if a number is a multiple of both three and five? Then the script will spit out "FizzBuzz."

* "Did you get all that? If not, no worries; just check out your Slack channel." This is your cue to send out the instructions.
	* Remind students not to start coding until they've thought about how to accomplish this task at a high-level--pseudocode it out! It might not seem necessary for this activity, but interviewers will expect them to think their problems out at a high level before coding a solution. 

* Here are the instructions:

**FizzBuzz**

* Write a script that prints the numbers 1 to 100 in the console. But for multiples of three, print `Fizz` instead of the number. For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.

### 9. Everyone Do: Go Over FizzBuzz (7 mins)
* Ask one of the students in the class to give you their solution. Run the code they gave you and test it out. Debug with the student if any issue pops up.

* Ask another student to answer the problem, and test and debug just like before. Chances are this answer will vary in some manner from the other student's--explain how programmers often solve the same problem in myriad different ways. 
	* Add in that they should still be mindful of how they tackle a problem, though--if their potential code lacks elegance or repeats itself when DRY is possible, then they might want to think a bit longer to come up with another solution.

### 10. Students Do: Prime Checker (20 mins)
* Tell students that the next assignment will be much more challenging then the last two. Implore them to spend at least 5 minutes away from Sublime to pseudocode their work.
	* When five minutes passes during the next activity, announce to the class that they may start writing actual code.

* Here are the instructions: 

**Prime Checker**:

* Write a function that checks to see if a number is a prime number or not. Have it return `true` if it is, or `false` if it's not.
	
* More Info:
	* More info on Prime numbers: https://www.mathsisfun.com/prime_numbers.html

* **INSTRUCTOR (do not slack this out)**: You may notice that your students have finished earlier than the allotted time. There aren't really many lines of code to get the prime number function working, but it does require a knowledge of a prime number's inherent properties (that's why we included the link in the instructions).
	* This is more a challenge of conceptualizing the problem then it is coding skill.
	* If you do notice that the class has finished early, you should cut the time short and go over the answer.

### 11. Instructor Do: Go over Prime Number activity (5 mins)
* Ask a student to explain their pseudocoding process for this exercise. Ask them about these concepts in particular:
	* How long did you spend pseudocoding?
	* What properties of the prime number did you base your code around?
		* This will likely be that a prime number cannot be divisible by any numbers other than 2 or itself. 

* Ask that student to give you the code they came up with line by line, and to tell you what each line does.
	* Test out the code to check its validity. If there's a bug, debug it with the student.


### 12. Students Do: File Sorter (30 mins)

* Tell the class that they'll have a bit more time to finish the next assignment, and that they should spend about 10 minutes pseudocoding. In this case, ask students to look up JavaScript methods that would let them work with the specific characters in a string.
	* Slack out this link, too: http://www.w3schools.com/jsref/jsref_obj_string.asp
	* Explain that while most in-person interviews won't allow for researching a language mid-question, they can still do this for online questionnaires, so long as they have enough time.

* Send your students [this JS file](student-facing/sort_by_file_extension.md), which also includes their instructions. They're copied here for your convenience: 

**Sort by File Extensions**

* You have an array of filenames with extensions. Sort the files into arrays based on whether they're videos or images.


### 13. Instructor Do: Go Over File Sorter (10 mins)

* Ask the class how they did. Remind them that this question is a tough one with that used a method we hadn't spent much time on in class. They shouldn't feel any doubt about their abilities as developers if they couldn't solve it in time. 

* It’s more important that they offer the interviewee a high-level description of how they would solve it: "basically, always pseudocode before attempting any tough interview question."
	* Ask if a student who couldn't code out a solution would like to explain at a high level how they would have made a file-sorting program? 

* Also ask if anyone in the class coded a solution in time.
	* If anyone responds, have the student give you the answer line by line. Ask the student how each line works. Run the code and debug any errors you may encounter.
	* If no one answers, type out the solution and explain how it works: [answer here](solutions/file_extension/app.js).

### Break (40 mins)

-------

### 14. Instructor Do (3 mins)
* Welcome your students back to class. Ask them how they feel the activities have gone so far. Remind your class that this particular class is meant to be challenging, and that you don't expect everyone to finish them--most students probably won’t/
	* The point is to emphasize th idea of thinking about each problem at a high level -- to visualize the solution. Even if a student lacks the know how to code out an interview question, they should at least know how their program would work at a conceptual level.

* You might have one or two students who feel distressed regardless of what you just said. You should tell your class that they can speak 1:1 with either you or a TA if they want to talk about any issues they've encountered today or over the length of the course. 
* You might even want to have a one-to-one with students during the time allotted for the next activities. Offer that time to speak with students.

### 15. Students Do: String Calculator (30 mins)
* Slack out the following instructions to your class:

**String Calculator**

* Write a text based calculator. Your function must accept a string as its only argument. The string must be in this format:

	* `Add 2 and 4`

	* `Subtract 3 from 5`

	* `Divide 6 by 2`

	* `Multiply 3 by 7`

* When your function reads this string, it will calculate and return an answer.
	* You only need to handle `subtract`, `add`, `divide` and `multiply`.


* Bonus:
  * Use a `switch` statement.
  * If a user enters a string that’s not in the above format, return an error message that tells them what they did wrong.


### 16. Instructor Do: Go Over String Calculator (10 mins)
* Call on two students to tell the class their pseudocode for this activity.

* Ask a third member of the class to give you their answer and to explain how each line of their code works. Run it and debug it with the student.
	* If no students could write out working code in time, type out the solution so that students can see a possible solution. [Use this file](solutions/string_calculator/app.js).

### 17. Instructor Do: Very Brief Introduction to Algorithms (5 mins)
* Introduce the final activity to the class: Bubble Sort. Explain that this is an algorithm commonly taught in Computer Science courses. 

* "But first, we need to briefly go over Computer Algorithms." Slack out [this link](https://www.quora.com/What-is-the-difference-between-algorithm-and-programming) and ask the class to find the answers to the following questions.
	* What is a computer algorithm?
		* Answer: A set of steps that a computer can take to solve a particular problem.
	* How does an algorithm differ from a program?
		* Answer: While some programs comprise a series of steps, a developer must code them out in a particular language. Algorithms are more high level--developers can apply the steps of an algorithm to different programs in order to solve various problems, like sorting and searching through data.

* Tell the class that Computer Scientists consider the Bubble Sort an inefficient and slow algorithm for sorting data. That description is especially true for programs that sift through hundreds of thousands of data entries. 
	* Regardless, it's still important to know how this sorting algorithm works -- otherwise, how would you avoid it? "That's why you'll be making a program that uses this algorithm in your last interview activity."

### 17. Students Do: Bubble Sort (40 mins)
* Slack out the Bubble Sort activity to your students: [link here](student-facing/bubble_sort).

* Make sure your class spends at least ten minutes visualizing their solution before they code anything. An algorithm is intrinsically high level; if a coder doesn’t know how Bubble Sort works, then they have no hope of solving the problem. 
	* Tell students that they should not look at a coded-out solution online--they're only cheating themselves if they do.

* The instructions are provided in their `app.js` file. They're copied here for your convenience:

**Bubble Sort**

* Write a function that sorts an array of numbers in order. You can do this with the Bubble Sort algorithm. If you are unfamiliar with Bubble Sort, use Google to read up on the concept. Spend about 10 minutes pseudocoding your solution before writing any JavaScript.

* Use the array provided below. Display the unsorted array in the `#start` div of `index.html`.

* When the user clicks the `button` in `index.html`, the sorted result should be displayed in the `#result` div.

* DO NOT USE JQUERY TO SELECT ELEMENTS. ONLY USE VANILLA JS.

**End Instructions**

* Note: Ten minutes into the activity, ask a student to explain to their classmates how the Bubble Sort algorithm works. This will ensure that everyone has a clear idea of the concept. 

### 18. Instructor Do: Go Over Bubble Sort and Wrap Up (10 mins)
* Tell students that time is up, and remind them that this exercises was meant to be a challenge--they shouldn't doubt their place as budding web developers if they couldn't solve it. 
	* "Remember the key to showing your thought process to the interviewer--visualizing and the problem and pseudocoding the solution."

* Ask a student in the class to explain their pseudocoded sort function.

* Also ask if any students were able to solve the activity. Have them tell you their code line by line--make sure they say what each line does as well. Finally, run the function and test if it works.
	* If no students can answer the question, reassure them that this activity was meant to be a challenge for them. Regardless, type out the solution provided [here](solutions/bubble_sort/app.js) so that they know what a working Bubble Sort looks like.

* Ask the class if they have any questions about today's lectures and the concepts you went over this week. Remind them one last time the point of today’s lecture: to always think about their programming obstacles at a high-level before trying to tackle them with code. Visuualization is an essential tool for web developers, whether during an interview, on the job or in any web project.

* If there are no remaining questions, dismiss the class.

## Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.

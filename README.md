This was haaaard!
The start was fairly easy. I've encountered similiar problem before (saw someone else solve it) and quickly remembered that I can use Math.floor and Math.random to easily determine computer's hand.
Assigning the resulting number to a specific hand - piece of cake. Prompting player's hand and comparing it to the computer's - again easyyyy.

And then it all went south so fast. Keeping the score. I came to conclusion that global variable is the way to go. At least for me it made sense. But for the love of everything holy I just couldn't get it to work.
Sure, the game kept score. But it felt totally random. Sometimes tie gave points.
sometimes wrong answer. Sometimes it gave two points instead of one. Whaaaat?!

I fought with it for few hours. I'm not good at debugging but I did my best. Used console.log, helped a little. Finally I used online JavaScript visualizer. After messing for a good hour or two with it I started to get on track of the problem.
It's round was kind of played twice. It calculated both player's hands. And for a mysterious reason it iterated back and did it again.
That's why the scored points didn't always match to the output of the round!

Eventually I found out the problem was one of my function calls inside of the main game function. It took computer hand function as a parameter instead of the resulted hand itself or something like that.

Anyway, fixed it eventually. After that messed around not too long to get everything look nice and make it convenient.

Used Google a lot during the biggest problem. In the end I'm quite happy that I didn't find the answer. Proud of myself for finding the solution.

What to focus on in the future? Please please PLEASE practice debugging. And planning. I know I should've done so, but the project instructions kind of gave directions "what to do next" so I decided to follow them instead of thinking enough myself.

(Can't use console debugger at all...)

But still! Proud of myself!

---------------EDIT FOR UI EXERCISE
This was toooough. Biggest problem was to make the buttons functioning. Took me at least four hours. Not 100% sure yet how I managed to do it, but I did it!

Score board was a breeze. Making the buttons disabled when the game ends not easy, but didn't take too long.

I have basic understanding of using getElements, document.querys as well eventListeners etc. Still, using them is hard.

Only regret: I used CSS to "animate" buttons. Which is super easy. I tried to use JS and eventListeners for that, but had no success and gave up on that front. Lost the battle but won the war!
Definetly need to get into that more!

I probably will be coming back to this project, trying to improve my old code and design. I feel that my original code for the console version of the game was quite messy and it did make this project significantly harder than it needed to be.

Managed to clean it a little bit during this second part of the project.
Good lesson for the future: think what you code, you may need to come back to it.

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

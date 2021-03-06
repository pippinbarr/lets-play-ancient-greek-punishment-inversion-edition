# Saturday, 5 January 2019, unknown time

__Notes before notes.__

I wrote the following about the game when quickly brainstorming it for the first time a couple of days ago:

> Sisyphus: if you're the rock you just can't do anything at all? A rock has no agency? But that would then extend to other elements which might be a bad thing

> Tantalus: you're the tree and water I suppose and can choose whether to fuck him over or not

> Prometheus: the easiest one in the sense that you just control the eagle and try to peck his liver out

> Danaids: would you be the bathtub? What would be in that scene? Nothing is animate,

> Zeno: I guess you'd be the flag? Maybe you can kind of move away from him as he tries to complete his race?

> I guess one way of thinking is that in order to invert them perhaps you can break the purity of the idea a little bit. In Zero it's funny if you move the flag, even though that's no longer about the idea of not being able to move through space (although it kind of is). Being the eagle is fine. Being the tree/water is fine and funny. I guess a simpler way to think about some of them (e.g. Danaids) is that you're just doing what the computer does - so when they fill the bath you let can empty it or not as you wish. And then for Sisyphus? Well perhaps for ... well perhaps you resist his pushing, so you apply yourself to try to force the rock downwards and he tries to push it upwards, that's pleasingly combative.

> So maybe there's room for some different comical experiences in there? Each one has a certain something. Perhaps Tantalus is the least clear to me suddenly? But perhaps not, perhaps it's fine for it to just be what it is? What happens if you let him get the apple? Maybe you lose because the point is you're meant to be punishing these people forever - so it maintains the infinite experience, but points out that the punisher also suffers for enternity? I quite like that! OKAY. This game is officially doable.

# Introductions, Attitude, Early Design, Two-player?, Assets and Code (Monday, 7 January 2019, 7:08AM)

__Introductions.__

Okay, time to start thinking about this new game since it's Monday morning at the start of the semester. In essence the idea is "inversion" in the sense of having the player take on the opposite role to the game as traditionally conceived. Whether or not this makes them the protagonist of the situation is actually an interesting question that is probably a part of this whole thing, though more interesting to ask than something to design in?

Anyway, the inversion means that in each of the five "traditional" minigames, I find a way to make the player the antagonist of the character they previously would have embodied. So where once you were Sisyphus, now you're the rock/boulder/cookie. And that's the whole thing.

__On research-creation, seriousness, popularity, and the desire to just make a game.__

Before I actually try to put down my first attempt at "design" in terms of specifying the roles the player takes and how they might be implemented within the kinds of controls the game has traditionally had, a quick word about objectives with this game. Notably, for me this is a game coming after a run of games (apart from Chogue) that didn't go quite how I wanted in terms of enjoyment. 2018 was a tough year in terms of enjoying game making because I was harried in other ways and was perhaps fixated on creating "legitimate" and "worthy" instances of research-creation, where I started to prioritise the ideas/conceptual stuff over the making of an actually entertaining game. (By entertaining I mean mostly something that entertains me - not that the game needs to be fun for an imagined player, though ideally that too.) So with this game part of the stated objective is just to make something that amuses me.

With that said, I'm not interested in abandoning the idea of research-creation obviously, and I think that conceptually this game still has an exploration to make particularly in terms of roles (antagonist versus protagonist?) and in terms of the idea of sequels and series and even "translation" of a particular kind (translation of a game into itself from a different perspective/framing). So there's "stuff" in there, but the primary objective needs to be enjoyment and making something I think is funny. (Zooming out further, I also don't want to hit the other pole of requiring popular appeal too much and I don't want to design for that or desire that too much - not least of all because it's not something I control, and it's not something the kinds of things I make necessarily work for.) In short, I'm making this simply because I want to, first and foremost, with a chaser of research-creation thinking, and perhaps a dash of desire for fame and recognition. How's that?

__Initial design.__

This is not a complicated game in terms of top level concept, just take each minigame and "flip the script".

__Sisyphus.__ It's pretty obvious that the antagonist here is the rock/boulder itself in terms of something you can actually see and engage with in the scene. My though the other day was that you would be the boulder and you would _resist_ Sisyphus's pushing. So he pushes upward to get the boulder to the top, and you exert yourself with the same keyboard input (alternating keys) to push him back down. This isn't strictly true to the myth anymore obviously, but in the myth the boulder is extremely passive, it's only moment of "agency" being to roll back down with he reaches the top (or whenever he flags in his effort). I think resistance is between because it's continuously active for the player, and it really creates an antagonistic effort which is pleasing to think about performing as a player - a classic "fight" and even more like a kind of sprinting game. (This is then beginning for a _two-player version_ as a follow-up? Or, should I be thinking about this game as two-player from the beginning? Or does that just complicate things?) If Sisyphus gets the boulder (you) to the top, does that mean you lose? Is this a "dangerous" reframing of a well-established myth? Or is it reasonable because it creates the antagonistic relationship I'm looking for from a gameplay perspective? _Myth versus gameplay_? Also a turn of phrase here for this whole antagonist experience: "The rock is in hell too."

__Zeno.__ The idea here is that you play as the flag. Again, it's the most obviously element on the screen that you could have agency over. It represents the "end" of the race and therefore if you can move it you're able to make the race essentially infinite. I think it would be funny for the flag to be a lot faster than the runner so that you could kind of taunt him by moving close and then zipping away? If you touch him (e.g. he passes/reaches the flag) then that would be game over (and a loss for you).

__Prometheus.__ Clearly you need to be the eagle. There's some question of what your controls are here - should you be able to fly in as you wish? Fly around on the screen? What if you fly off the screen, does it trigger night time? Do you just wrap? At base, though, it seems like you should be able to fly around, land on Prometheus, and then hit another key to peck. If he struggles, you're automatically bumped back up into the air and have to land again. There's an opportunity to do some kind of strange "moon-lander" mechanic rather than obviously arrow keys to control the eagle? But that might be getting pretty distracting? Is the role of the antagonist meant to be challenging? A flappy bird mechanic would be pretty hilarious too, but distracting.

__Daniads.__ This one's a bit tricky because the antagonist here isn't quite an object so much as it's the holes in the bathtub. My thought (as above) is that you control the holes, and choose when they trigger. Thus, they fill the bath (holes closed) and then as they're running back you hit your button to open them and the bath empties. It's an exceedingly simple mechanic and very sporadic as an experience for the player, but because of that it opens up the opportunity for the player to engage in comic/tragic timing. You let them fill the bath almost all the way and then at the last minute you empty it. A little unclear when this one ends - if they get into the bath, you could still empty it, and they could get out and start again? The point in the myth is that they need to get clean, so perhaps there's a "cleaning" meter that, if it fills, means you've failed? (Kind of weird how I did it in Limited Edition, where you just sat in the bathtub - I mean, I guess being clean isn't any guarantee of anything, you just get dirty again?)

__Tantalus.__ Pretty obvious that you'd control the tree and the water level? It's a related comic timing thing to Danaids in that sense, but more frequent? As he reaches, you pull away, as he gives up, you tantalise him again. In a way it's the most banal version of things, but that's useful I guess in the sense of the basic concept - they're trying to do something, you react at the same moment to prevent them from doing it. No problem.

So that's all the different versions with relatively clear solutions for each one (with perhaps some confusion around Danaids and the relationship to cleaning and an end-point. Also, actually, there's no obvious way to end Prometheus...)

__Endings.__

In designing above I seem to be saying that there's the idea of failure for the player in the antagonist role. Obviously you're meant to be punishing them, so if you fail to accomplish the sort of punishment that is your job, then that's a bad thing. So how do you fail each one?

__Sisyphus__ pushes the boulder to the top of the hill. __Danaids__ get clean (progress bar???). __Tantalus__ eats an apple or drinks some water. __Zeno__ reaches the flag. __Prometheus__ gets through a day with some liver left???

That is, in Prometheus perhaps time is passing (the day is getting darker) and you need to get the liver to 0% before night falls or you're considered to have failed. In a sense you've "failed the myth" which states that the eagle pecked out the liver each day and it regenerated at night. That's a useful way of thinking about it. It also helps a little bit in justifying the rock in Sisyphus I suppose, in terms of preventing the thing he is assigned to fail to do "get the rock to the top of the hill".

So these endings seem more or less fair. Prometheus changes the aesthetics the most I suppose, but that's not the end of the world.


__Two-player?__

So when you think about these minigames as a protagonist versus an antagonist it pretty clearly opens the idea of two-player. However, two-player does complicate things substantially in terms of whether or not it's interesting to be the protagonist? I mean, it wasn't in the original games to be fair, but it could be worse experientially if you are sitting next to the person preventing you from doing what you "need" to do? Or is that precisely why it would be a good idea to implement this?

The other thing about it is that it would probably require at least some redesign to make some of the roles possible. The eagle role seems like it wouldn't work in the classic setup because Prometheus can just wriggle eternally and let the day pass and then the eagle will lose. So there would need to be some "balance" (presumably) to allow the eagle a chance to succeed, such as a cool-down timer on prometheus' wriggles which would need to be indicated somehow (maybe he can be completely floppy when he has no energy to wriggle, then kind of doing a mini ab crunch when he's ready to do one?). There would then be the idea of taunting him into wriggling but not actually landing, so that you could get a peck in? But it seems like Prometheus would always have the advantage here, which is problematic?

But beyond those sorts of design questions, which are prooobably solvable, the more immediate question is should I
1. make this game two-player from the get-go
2. include two-player as some kind of bonus experience unlocked somehow (this might let me get away with more poorly tuned play?)
3. make a two-player version as a follow up later this year

Option 1 is out, I think, just because I think there's value to antagonising the computer (raising issues of whether you're really antagonising it given it doesn't care, or whether it's just you in hell in exactly the same situation as the protagonist but just performing a symbolically different action).

Option 2 is plausible if I want this to be a bigger game that I'd thought, it also allows me to "encourage" people to try the whole game out I suppose, with the thought of unlocking the mode. But it does also add work on to the overall project.

Option 3 is appealing because it means I don't have to care right now, but it might also end up feeling too much like a cheap reworking of this current game and so not really distinct enough as an experience to bother with? That said from a design perspective I think there's clearly a difference to be had? That said in plenty of these modes the protagonist just seems totally screwed anyway? The idea of balance is probably an illusion given that each mythical scenario is set up to completely screw the protagonist.

So in that case I lean toward option 2. With Prometheus as the most problematic because of the time limit and the potential for it to be "unwinnable" for the antagonist, which is out of keeping with the myth. The antagonist should always have the advantage and the whole thing just becomes about both player sustaining the experience for as long as they can bear it. The easiest way to make that work for the Prometheus version is to not allow failure I suppose, but that kind of breaks the theme of "failing the myth" as the antagonist which I really like. Something to think about.

__Assets and Code, or Here's Something I Prepared Earlier.__ One funny thing about this whole project is that at some level I have all the assets basically done from the beginning as far as I can think of it. Having made Limited Edition and CPU Edition both in Phaser, and given that those two games reflect both scenarios (victory for antagonist and victory for protagonist), there's nothing to do assets-wise, or very little. Importantly, too, I don't _want_ the game to look or sound any different from previously - part of the point of this series is using the same imagery and sounds to convey different tones/ideas about the "same" situation. This probably extends to the level of code in lots of ways too - the code is kind of pre-written in a lot of ways, just need to thread it together differently? We'll see.

---

# Laying down the design, abandoning mobile?, Phaser 3? (Wednesday, 9 January 2019, 7:02AM)

The time has come to write down what's needed to actually create these games, no need to delay I think, the concept is simple, most of the design is pre-existing in terms of the overall idea, so I shouldn't have to do vast amount? Without further ado then?

__Sisyphus__

- Identical assets etc. (as in, it's even fine to have the same long animation of the entire scene which I did back in the day because it was so hard to programmatically animate the pushing)
- Sispyhus steadily pushes on the boulder to move it up (should he ever pause now and then and lose ground on his own, or would that be confusing? Probably confusing)
- Alternating G and H (or tapping for mobile) reverses the animation and pushes him backwards (at a rate relative to your effort)
- He pushes at a basic solid effort, so if you work hard you push him (slowly?) back, average he just stays in place, and not hard enough he will make progress
- Should you push him backwards even on the flat? Probably the answer is either yes or that he starts at the foot of the hill so you don't need to worry about any of the pushing not being a kind of enaction of "gravity"?
- _Ending_ If he makes it to the top, it's game over - "Sisyphus pushed the boulder to the top of the hill!" "YOU LOSE"

__Prometheus__

- Control the eagle movement with arrow keys (could do space to flap or something to control height in a more interesting way? But what would that really add?) (Some concern about mobile in this scenario - only have one "button" and I don't think it'll be expressive enough for all the actions here?)
- Land on Prometheus - I guess if you reach a certain proximity it just flips to landed? What if you land in the wrong place - how do you know where to land if you're the player? (And haven't played the previous games? Maybe the instruction can tell you to land on his legs?)
- Once landed you need a key to peck and possibly movement keys to take off again? (I'm thinking about 2-player there a bit?) Or perhaps not, perhaps just if you get shook off you need to land and start again?
- Once the liver is gone you should fly off the screen I suppose, but could also just make night fall instantly and not show the bird anymore so that it's not yet another step
- Obviously Prometheus needs to struggle intermittently.
- This one is clearly a bit over complex and I'm less sure of myself
- Could consider the eagle flying on a path, so you don't control movement, but rather flapping - tap/keys to fly down to the guy, then tap to peck, and tap to reland if shaken off? Too little agency? I mean it's not meant to be a high agency game...
- _Ending_ Uh... I guess this one doesn't actually have a success case! No ending then. Just eternal detente or eternal liver-eating
- __Key design problem__: How do you control a complex thing like the flight of the eagle in combination with landing and pecking, when you're trying to minimize complexity? And if you restrict it too much does it feel untrue to the thing you're seeing? (Sisyphus is just keyboard mashing but it feels true to the experience) If it's 'tap' to flap, so you make incremental progress toward Prometheus, then land automatically, then it's tap to peck? Is that sufficient? In one sense it's lame because you could play without looking - just tap tap tap. On the other hand, it's at least a pairing between an act (tap/press) and an outcome (flap, peck). Maybe one key for flapping down and one key for pecking? What if you flap when you've landed? Would you take off? Perhaps it would take off into the hover mode? Then you'd have to land again? A bit confusing if a single tap means to flap up and to flap down?

__Zeno__

- Control the flag with arrow keys, left and right, it can move kind of quickly, but at least moves faster than the guy
- The guy jogs toward the flag and your job is to keep it away from him
- This means we need a scrolling world because you need to be able to head off to the right
- I guess we could say they always have to both be on the same screen (no zooming), so at a certain point of him jogging (1/3?) the screen would start to scroll right with his movements, and then would allow you to move further right, so you could always be at least 2/3 of the screen away
- Might need some kind of hint of a background to clarify what's going on though? Would have some concern that this would look pretty abstract (may just be something where I have to make it and check it out). Markings on the ground (like the half-way point etc. could work do? Little ruler markings?)
- _Ending_ Ends if he reaches the flag (or you run the flag into him) and completes the race

__Tantalus__

- Pretty straightforward reversal. Press one key to raise the apple (I guess perhaps it should just be press and hold, doesn't feel like this one should require play effort) and another to lower the water.
- The point is to watch for his animation toward one of the other and get it out of the way in time
- Can you withdraw the apple and water at the same time? And just keep them there, unavailable? Don't see why not...
- _Ending_ Ends when he manages to grab the apple or drink some water

__Danaids__

- Control the bathtub's holes (not sure if they should start open or closed? Probably closed.)
- The person will fill the bucket and proceed to the bath, pour the water in (regardless)
- If the holes are closed, the bath fills (as per Limited Edition), but if at any point you open them, it all pours out (might need some new animation for that)
- If they fill the bath all the way to the top they start washing themselves (maybe need a little progress bar? Need a little animation, maybe just a flashing "cleaning" text?)
- If they get clean you lose, but you can still empty the bath while they're cleaning and they'd get out and go and fill the bucket again etc. (maybe they have some amount of cleanliness needed under the hood?)
- Need to say that if you open the holes all the water comes out, can't control the amount
- _Ending_ Cleanliness

__2-player__

- Unlocked when you've attempted any given level? Or all the levels? For some set amount of time so you can't just load and immediately quit? Maybe you have to lose to get back to the menu? Or even if you reload the page/come back, you should have it enabled?
- Should literally be exactly the same, but someone can play the original role in the same way it is always played - not about it being fair/balanced/interesting, just about creating the dynamic between people instead of a person and a system. In some of them you're more blatantly at the mercy of the punisher, in others it's less clear (Prometheus, Sisyphus?)
- Problems of input for mobile here - Tantalus would require four distinct actions, and even if screen is in quadrants if feels like it'd be very busy to look at... (although frankly the instructions for 2-player on desktop would be similarly overwhelming I suppose)

__Mobile__

- Is it even worth it? What do I get out of it? Does anyone play on mobile? These aren't really designed for mobile. Is there even a culture of people playing stuff on mobile in the browser? It can be a significant effort and a design problem to go after it, and I'm unsure why - it seems like it'd just be for numbers of people looking at it, but... meh?
- So it's looking like no mobile then...

__Phaser__

- I see that Phaser 3 is out now which is... good? But it looks like it's pretty radically changed from the 2.x series which makes me leery of jumping into it. Also this makes me think: yikes in terms of teaching it for CART263 actually. Will have to think about that.
- Investigating Phaser 3 a bit more reading its updates etc... I guess it would make sense to migrate just in terms of needing to learn it at some point anyway for any 2D stuff I'm going to do? I can do the basic tutorials and then use those as the basis for presenting something to class while simultaneously using what I learn to work on this game? It'll delay the output of the game for a bit, but I think that's probably fine anyway. Double whammy?
- So the next step really for this game is going to be to do Phaser 3 tutorials and learn that, which I'll look forward to!

---

# On largely finishing Sisyphus (Sunday, 13 January 2019, 13:12PM)

Reporting in. I've settled into using Phaser 3 and it's going fine with my existing knowledge of version 2. There have been things to learn, but this is such a simple game and the Phaser 3 framework is pretty similar to the previous, so it's not that hard to adjust myself to it. (By the way I resolved the teaching part of this by just not promising to teach Phaser - it was a ridiculous scale of thing to teach anyway.)

At this point I have Sisyphus all but done, which is a good feeling. Some nice moments of realisation along the way about the instructions ([41a9fe3](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-inversion-edition/commit/41a9fe39aa586e5055258585cc011da8f90367e7)) and the issue of indicating Sisyphus's goal ([529e09c](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-inversion-edition/commit/529e09c83045b9f63c3a1e27fa0bf45102ee76aa)).

Looking ahead I can see there will be various potential issues of separating out animations, because in many of the games the animations are coupled all together (e.g. Tantalus). Given I now need independent control of two elements per scene, it'll often be the case that they need to animate separately (Sisyphus is an exception because he's locked to the boulder). So this project will require some animation stuff, which is fine.

Don't foresee any major bumps as yet. Phaser 3 has come to me faster than expected, which I'm happy about for sure.

---

# On largely finishing Zeno and starting Danaids (Wednesday, 16 January 2019, 7:40AM)

Not a huge amount to report, but just want to keep at least some connection with this journal. I'm writing a little less in it to avoid the feeling that the project is more about writing about the project than making the project, which is something I ended up feeling with the shooting game I abandoned at the end of last year. So I'm not prioritising this journal as much as I have been in order to just 'enjoy' the actual building of the project.

Zeno is now pretty much done. Had a good design moment with it where I felt dissatisfied by the feeling of the flag getting to the far right, scrolling Zeno back, but then just keeping them both on screen. Very limited agency for the flag, and didn't feel all that satisfying as a tormentor, and not especially true to any principle, it was just a kind of arbitrary decision that made sense without necessarily being interesting.

So I've changed that now to the idea that the flag can move arbitrarily far to the right, with Zeno scrolling away off the left and being replaced by an indicator that tells you how far away he is from being back on the screen, as per various racing games for instance. This is satisfying because you still get to see his plodding progress (reflected in the distance creeping down), and so can anticipate his reappearance, but as the flag you can continue to affect him as much as you like. Just realising I didn't include the ability for the flag to move left, so I'll need to put that in. Dangerous since you could collide with him a little easily perhaps. In the end it feels like a more satisfying version of the game with more apparent agency for the player, while still remaining suitably awful for both parties (Zeno and the flag in this case).

I've started the Danaids. Sitting with the assets has clarified what I need to do to make it work I think. Mostly it's just going to be animation management, and a new animation that will allow me to show different amounts of water emptying from the bath. Should go fine, and here the main point of the experience (and perhaps this is true for a bunch of them?) is the comic timing involved - emptying the bath at the last moment etc., but this being played against the indifference of the computer. Maybe computers even like doing this kind of thing? Something to do.

So all's well in this project.

---

# On having finishedish Danaids and Tantalus, and sighing about Prometheus, then maybe "solving" it? (Monday, 21 January 2019, 15:50PM)

Just checking in here in process-land. Most of my time on the project for the last while has been pretty much focused on just getting the "obvious" stuff to work, including working out what's "obvious" when it appears in front of my face. As always, development itself is a big asker of questions. Such as

- What should happen if you lower the branch with the apple while Tantalus is reaching for it?
- What if you raise the water while Tantalus is stooped so it goes over his head?
- More generally, what are the dynamics with Tantalus? How in control should you be? What's "fair"?
- How the fuck should I deal with the eagle landing on Prometheus and pecking? In terms of the beautiful expressivity of flight? In terms of the control scheme?
- And such

I mean, you could think your way into these question beforehand too, but there's nothing like actually needing to write lines of code to crystallise the fact something is a problem.

__Tantalus__

Surprisingly problematic in terms of "subtle" interactions between your actions and his - it create the possibility for numerous different times of overlapping animations that could signify and important moment, most notably how to respond to the player "letting go" in the middle of Tantalus' attempts to reach something. Particularly in terms of drinking because of the various levels the water can be at. And the fact I (stupidly?) made the water animate faster when it goes down (because it looks funnier?). Maybe there's a solution somewhere in the framerates?

__Prometheus__

Remains the most difficult one to conceptualise because the flying is such a big open question. I think it's clear I can't just allow arbitrary flying? Can I? Maybe I can? With screen wrap? With a buffer around everything except Prometheus legs as a landing spot? Weird. Maybe that would conceivably work? Plus getting kicked up into the air if he struggles. Plus not being able to fly off the top? How would I define the area you're actually allowed to fly in? What about the two sides of the rock? God what a boring proposition it is to figure stuff like this out. On the other hand it feels truer to the situation than just an 'on rails' approach to the landing process? Like if you're going to 'be the eagle' you need to feel like you have the agency to fly around and then choose when you're going to land and peck?

Thinking as a player for a moment: they are totally going to want to land on his face, aren't they. Ugh. Players. But you would. You would want to do that. And if you can land elsewhere why not there? Ass.

So a semi compromise would be: hotspots on the rock and Prometheus. If you enter one of these you land in a forced position (facing a direction that makes sense) - so it's a snap-to-land situation. For the rest you fly around, can't go off the bottom, wrap on the sides (if liver still 100%), and can't go off the top? This will be annoying to write in terms of hard-coding all the locations involved (unlesssssss I use images to designate the positions? Or will that work? Perhaps not. I don't know what the hitboxes for overlaps would be for sprites defined as the size of the screen - suspect it won't work. Yeah going with no.)

Okay, so hardcoding landing positions, constraining in the other ways. May need some other contextual instructions if people get cute (e.g. what to do if they land on Prometheus' face? Just nothing and they keep flying until they land on his damn leg area and can peck? Fair. Fair. Or they can peck from there, but it doesn't hit his liver? Gross and weird. But semi funny. Can cross that bridge when I come to it.)

Okay this will do.

---

# On having finished Prometheus, tweaked Zeno and Danaids, thoughts on Tantalus + input + 2P (Wednesday, 23 January 2019, 17:09PM)

__Prometheus__

Finished off Prometheus today and I think it essentially works pretty well. Discovered the joy of Tweens to automate things with the eagle like hovering and flying on and off screen without player control, pretty seamless actually, the wonder of oncomplete event handlers and so on. Happy with it. The Prometheus thing solves the "no victory" situation by just having an end of day. If you don't peck out the liver before that you lose, tough luck. If you do, it triggers end of day early so you don't wait around. Also did add all the other perches and they work fine. Feels pretty good.

__Zeno__

Went back to Zeno just to add the ability for the flag to move all the way left as well, so you can leave Zeno in the dust but then kind of come back for him if you want to. Adds to the sense of the space being real and means the player has total agency over where the flag goes rather than arbitrary screen-based constraints. Works well.

__Danaids__

My student Charly pointed out in class when I demoed the game that if you allow the player to just leave the holes open (which I did), they could leave them open and walk away without having to play the game anymore. The Danaid would be perpetually thwarted/punished without any effort/investment from you. As such I've changed it so the holes only stay open long enough to empty the tub, or just open and then close if there's no water in it. Changes the dynamic so you have to explicitly empty the bath if you want to keep punishing them, and restores the equivalence between tormentor and tormented.

__And now?__

There's a couple of extra things to do on Tantalus to handle edge cases, and there's a need for sound in all levels, but beyond that the game is close to done, miracle of miracle. I haven't given a lot of thought to implementing two-player as yet, but I don't think it would be hard right? Just a flag and reinstate input controls for the other person. I think it's worth it still. Some concern about the diversity of controls in the game? Arrows, g + h, spacebar. A little messy. Maybe it should always be arrows+space for P1 - tap space to push boulder down. Should work okay actually. Adding to the todos along with 2P.

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

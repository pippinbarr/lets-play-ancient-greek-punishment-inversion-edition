## Design

## Develop

- ~~Set up a skeleton phaser3 project~~
- ~~Add basic scene template to project~~
- ~~Add starting menu text just prove you can~~
- ~~Add basic menu interaction~~

### Sisyphus
- ~~Finish first version to point where you can use input to reverse the animation down the hill~~
- ~~Add the ending~~
- ~~__WENT WITH THE AWFUL PROCESS OF DRAWING RECTANGLES OVER IT. WORKS.__ How to indicate the "top" of the hill? (Remove in all images is a huge pain, code to draw rects over top part of the hill would work but is ugly?)~~
- ~~Separate animation elements (ala Limited Edition for efficiency and because I'll have to elsewhere)~~
- ~~Remove instructions once they've followed them and had an effect~~

- Sound
- Tweak feel

### Zeno

- ~~Assemble assets into atlas~~
- ~~Create basic scene with key assets (animating) in it~~
- ~~Draw ground with graphics (and don't scroll it)~~
- ~~Draw little white dots on ground (seeming to mark start, half-way and finish but actually there to show motion)~~
- ~~Add ability to move flag with keys~~
- ~~Add scrolling of the dots and Sisyphus when the flag moves to the right against the edge (until Sisyphus back to max left)~~
- ~~__ NO__ Contemplate whether a camera that zooms out would be better (but problematic for being non-infinite)~~
- ~~__THIS WORKS WELL__ Try a version where Zeno can scroll off the left side indefinitely (maybe add one of those little "< ZENO" markers)~~

- Sound
- Add ability for flag to move left and scroll Zeno back toward his goal (dots go other way)
- Work on feel (quite a lot)

### Danaids

- ~~Assemble base assets into atlas~~
- ~~Create basic scene with assets~~
- ~~__THIS ISN'T NEEDED__ Create bath animation that can empty from five rows of holes (one per 20% fill from the bucket)~~
- ~~Get the basic process of the Danaid automatically filling bucket and pouring it into the bath~~
- ~~Add Danaid getting into bath at 100% full~~
- ~~Get basic emptying working: you press the button, holes appear, water comes out, all water lost~~
- ~~Get percentage dependent emptying working (need a special animation that splits water actively coming out from its ending)~~
- ~~Empty while pouring: empty after pour complete~~
- ~~Add ability to empty tub at any point~~
- ~~__KIND OF JUST WORKS?__ Emptying while about to pour?~~
- ~~Empty while bathing: empty full 100%, then Danaid gets out and goes back to filling~~
- ~~Empty while climbing in: choose some point of no return for getting in anim and before that reverse? Or just always make them get all the way in then out again?~~
- ~~Add 'cleaning' frames (or just flash "WASHING""? or just say that when they get in they're instantly clean? Or have a percentage of CLEANLINESS going up)~~

- Change controls so that you open holes, it empties (or not) and then they close again (to avoid the situation of just leaving the holes open indefinitely and thus not needing to stay on guard and punish)
- Sound
- Tweaks

## Tantalus

- ~~Assemble assets into atlas (including separating tree, water, Tantalus)~~
- ~~Create basic scene with assets~~
- ~~Add ability of Tantalus to eat and drink~~
- ~~Add ability to move tree or water away with key hold~~
- ~~Automate Tantalus to reach and stoop randomly~~

- Handle scenario where he's reaching and you lower the branch (he should grab the apple right?)
- Handle scenario where he's stooping or unstooping and you raise the water (he should unstoop and drink the water right?) (or should it simply be that if the water goes over his head he just drinks it? How can I tell?)
- Sound

## Prometheus

- ~~Work out how the flying part is going to work because it ain't clear yet?~~

- ~~Assemble assets into atlas~~
- ~~Create basic scene with assets~~
- ~~Enable free-form flying around~~
- ~~__WENT FOR NO EXIT ON ANY SIDE TO CREATE SENSE OF CONFINEMENT__ Constrain flying based on wrap and no-exit for sides and top respectively~~
- ~~Create hotspots for snap-to-landing~~
- ~~Enable pecking~~
- ~~Put in liver stat and make pecking affect it~~
- ~~__NOT NEEDED I THINK? YOU'D TRY IT EVENTUALLY__ Add instruction for takeoff? Or not really needed?~~
- ~~Enable auto-struggle~~
- ~~Improve day/night cycle (fade in from night especially)~~
- ~~__THINK THIS IS FIXED BY MAINTAINING THE INSTRUCTION IF YOU LAND ANYWHERE OTHER THAN THE RIGHT SPOT?__ The question of whether it is clear which position is suitable for liver pecking? Add a literal arrow pointing to the spot?~~
- ~~__COMPROMISED BY HAVING GRAY ROCK AND PROMETHEUS BUT BLACK EAGLE WHICH IS BEHIND THE ROCK SO IF PERCHED DURING NIGHT YOU JUST SEE THE EYE__ Consider adding the grey versions to full night~~

- Sound

## Bugs

- TTF font doesn't always display, vanishes after hard reload (no cache), drops back to Times or similar
  - Seems to rectify when you load the next scene (Sisyphus always has correct font, even when Menu doesn't)
  - I've actually seen it break on the second scene too now, but very rare - what is this??

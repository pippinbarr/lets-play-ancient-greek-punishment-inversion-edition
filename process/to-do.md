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

- Add ability for flag to move left and scroll Zeno back toward his goal (dots go other way)
- Work on feel (quite a lot)

### Danaids

- ~~Assemble base assets into atlas~~
- ~~Create basic scene with assets~~
- Create bath animation that can empty from five rows of holes (one per 20% fill from the bucket)
- Generic empty: play appropriate animation for number of holes (consider separating water from bathtub actually?)
- Empty while pouring: empty after pour complete
- Empty while bathing: empty full 100%, then Danaid gets out and goes back to filling
- Empty while climbing in: choose some point of no return for getting in anim and before that reverse? Or just always make them get all the way in then out again?
- Add ability to empty tub at any point
- Add 'cleaning' frames (or just flash "WASHING""? or just say that when they get in they're instantly clean?)

## Tantalus

- Assemble assets into atlas (including separating tree, water, Tantalus)
- Create basic scene with assets
- Add ability of Tantalus to eat and drink
- Add ability to move tree or water away with key hold

## Prometheus

- Assemble assets into atlas
- Create basic scene with assets
- Work out how the flying part is going to work because it ain't clear yet?

## Bugs

- TTF font doesn't always display, vanishes after hard reload (no cache), drops back to Times or similar
  - Seems to rectify when you load the next scene (Sisyphus always has correct font, even when Menu doesn't)

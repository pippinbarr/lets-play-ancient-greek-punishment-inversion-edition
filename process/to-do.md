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

- Work on feel (quite a lot)

### Danaids

- Assemble assets into atlas
- Create basic scene with assets
- Add ability to empty tub at any point (may need frames where the wholes have blue in them higher up)
- Add ability to empty tub while Danaid is in it
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

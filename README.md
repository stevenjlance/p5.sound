# Sounds
p5 is a JavaScript library which means we add it onto JavaScript and it has it's own docuemntation and commands. p5.sound is a library of p5, so it can extend the p5 code that we have written up to this point in the course. It also has it's own [documentation](https://p5js.org/reference/#/libraries/p5.sound).

There are a few important commands in p5.sound, but they are very similar to what we have learned during this course. As with images, we first must `loadSound` in our `function preload()`. We then can `.play()`, `.pause()`, and `.stop()` the sounds. 

**NOTE**: You should only call `.play()` inside the draw loop INSIDE a conditional statement.

```javascript
var sound

function preload() {
	sound = loadSound("sound.wav")
}

function draw(){
	if(keyIsPressed && key == "s")
	{
		// Stop sound if the p key is pressed
		sound.play()
	}
	if(keyIsPressed && key == "p"){
		// Pause sound if the p key is pressed
		sound.pause()
	}
	if(keyIsPressed && key == "t"){
		// Stop sound if the t key is pressed
		sound.stop()
	}
}
```

We also can check if a sound `isPlaying()` and do certain command based on this!

```javascript
// Pause sound if the spacebar is pressed (it's keyCode is 32) and the sound is currently playing.
if(keyCode == 32 && sound.isPlaying()){
	sound.pause()
}
```

## Tasks for Today
1. 5 sound files have been uploaded for you. Play each sound when a different key is pressed

2. For the 5 sound files that you created conditionals for in the last challenge, create conditionals to pause and stop each sound when different keys are pressed

3. Change the background color based on whether a song is playing or not playing. E.g. The example shown below is “lightblue” when the song is playing and “plum” when it is paused

![](/assets/challenge4.gif)

4. Use the keyCode to check if a certain key is pressed. Stop, pause, or start the sound based on if that key is pressed. [Use the keyCode info site for specific values](https://keycode.info/). Try to use non-alphabetic keys!

```javascript
// 13 is the return key. Pauses when return is pressed.
if(keyCode == 13){
	sound.pause();
}
```

5. Draw a square or ellipse on the page. Change the color based on whether the sound is playing. In the example shown below, the circle is yellow only when the sound is playing.

![](/assets/challenge5.gif)

6. Go to [freesound.org](freesound.org) and 
- Create an account
- Search for a sound that is interesting to you, but make sure it is no longer than 15 seconds.
- Download the sound and upload to repl.it
- Add the sounds into your p5 program and have them start, stop, and pause under different conditions!

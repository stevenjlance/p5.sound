var sound1
var sound2
var sound3
var sound4
var sound5

function preload() {
	sound1 = loadSound("horn.wav")	
	sound2 = loadSound("jazz.wav")
	sound3 = loadSound("ba-da-dum.wav")
	sound4 = loadSound("whoosh.flac")
	sound5 = loadSound("laugh.mp3")
}


function setup() {
  createCanvas(600, 600);
	//Slowing it down so that user events don't trigger too many of the same sound at once.
	frameRate(5)
	
	
}

function draw() {
	// background(255)
	// Questions 1 to 3
	if(keyIsPressed){
		if(key == "l"){
			background("lightblue")
      sound1.play()
    }
    if(key == "s" && sound1.isPlaying()){
			background("plum")
      sound1.stop()
    }
	  if(key == "m"){
	    sound2.play()
	  }
	  if(key == "p"){
	    sound2.pause()
	  }
		if(keyCode == 73){
	  sound3.pause();
	  }
		
		if(key == "a"){
			sound4.play()
		}
		if(key == "w"){
    	sound5.play()
  	}
		
	}

		// Question 4
		if(keyIsPressed){
			if(keyCode == 32){
				sound1.play()
			}
			if(keyCode == 13){
				sound1.pause()
			}
			if(keyCode == 16){
				sound1.stop()
			}
		}

		// Question 5
		if(sound5.isPlaying()){
			fill("blue")
			ellipse(50,50,50)
		}
		else {
			fill('yellow')
			ellipse(50,50,50)
		}
	

	
	

	
}
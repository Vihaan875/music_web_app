leftWristx=0;
leftWristy=0;
rightWristy=0;
rightWristx=0;
song1="";
song2="";

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function play()
{
    song.play();
}

function draw()
{
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
}
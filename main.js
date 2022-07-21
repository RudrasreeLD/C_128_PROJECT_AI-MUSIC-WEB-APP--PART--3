song_1 = "";
song_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song_1 = loadSound("THE SPECTRE.mp3");
    song_2 = loadSound("ON MY WAY.mp3");
}

function setup()
{
    canvas = createCanvas(690, 547);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 20, 20, 650, 500);
}

function play()
{
    song.play();
    song.setVolume(0.1);
    song.rate(1);
}

function modelLoaded()
{
    console.log("PoseNet is Initialised");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}
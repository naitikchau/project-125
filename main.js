noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800, 400);
    canvas.position(430, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        
     console.log(results);

     noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+ noseX + "noseY = "+ noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX + "difference = "+ difference);

    }
}

function draw()
{
    background("#5196e3");
    document.getElementById("font_size").innerHTML = " = " + difference + "px";
    textSize(difference);
    fill("#00ff0a");
    text('Naitik Chaurasia',50,400);
}
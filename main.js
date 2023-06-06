function setup() {
    video = createCapture(VIDEO); 
    video.size(600,600); 
    canvas = createCanvas(600,600); 
    canvas.position(580,150); 
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses); l
}
function draw() {
    background('#969A97')
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results) {
    if(results.length > 0) { 
        console.log(results);
    }
}
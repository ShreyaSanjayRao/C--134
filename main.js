img="";
status1="";
objects = [] ;
function setup() {
canvas=createCanvas(380,380);
canvas.center();
video= createCapture(VIDEO);
video.size(380,380);
video.hide();
objectDetector=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="status detecting objects";              
}
function draw(){
image(video,0,0,380,380);
if(status1!=""){
    objectDetector.detect(video,gotResult);
    for(i=0;i<objects.length; i++){
        document.getElementById("status").innerHTML="status:object detected";
        document.getElementById("number_of_objects").innerHTML="number of objects detecter are :"+ objects.length;
        fill("#fc03c6");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+ ""+ percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("#a836a6");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}
function preload(){
img=loadImage("laptop.jpeg");
}
function modelLoaded() {
    console.log("modelLoaded");
    status1=true;
    
}
function gotResult( error,results) {
if (error){
    console.log(error);
}
console.log(results);
objects = results ;
}
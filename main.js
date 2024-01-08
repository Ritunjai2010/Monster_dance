function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wecsmiktC/model.json",modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    console.log("inside");
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        Red = Math.floor(Math.random()*255)+1;
        Green = Math.floor(Math.random()*255)+1;
        Blue = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = "I can hear :" + results[0].label;
        document.getElementById("result_confident").innerHTML = "Accuracy :" + (results[0].confidence *100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb(" + Red +"," + Green+"," + Blue + ")";
        document.getElementById("result_confident").style.color = "rgb(" + Red +"," + Green+"," + Blue + ")";
        Img1 = document.getElementById("aliens-01");
        Img2 = document.getElementById("aliens-02");
        Img3 = document.getElementById("aliens-03");
        Img4 = document.getElementById("aliens-04");
        if (results[0].label == "Clap"){
            Img1.src = "aliens-01.gif";
            Img2.src = "aliens-02.png";
            Img3.src = "aliens-03.png";
            Img4.src = "aliens-04.png";
        }
        else if (results[0].label == "Snap"){
            Img1.src = "aliens-01.png";
            Img2.src = "aliens-02.gif";
            Img3.src = "aliens-03.png";
            Img4.src = "aliens-04.png";
        }
        else if (results[0].label == "Unknown language"){
            Img1.src = "aliens-01.png";
            Img2.src = "aliens-02.png";
            Img3.src = "aliens-03.gif";
            Img4.src = "aliens-04.png";
        }
        else {
            Img1.src = "aliens-01.png";
            Img2.src = "aliens-02.png";
            Img3.src = "aliens-03.png";
            Img4.src = "aliens-04.gif";
        }
    }
}












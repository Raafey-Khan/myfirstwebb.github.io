var easy_words=["the","of","and","as","a","software",
"engineer","you","have","to","type","alot","so","practicing",
"typing","in","these","my","custom","website","may","help","you",
"the","website","is","depending","on","frontend","technologies",
"like","HTML","CSS","and","Javascript","you","may","end","up",
"typing","because","when","you","start","typing","in","your","brain"
,"builds","a","habbit","of","remembering","the","words","and",
"as","long","as","you","see","a","word","you","start","typing",
"the","words","without","even","thinking","where","to","type","but","remember",
"the","one","and","most","important","rule","now","type","after","me",
"NEVER","EVER","LOOK","AT","THE","KEYBOARD","thats","what","all","for","today",
"give","a","feedback","to","the","user","who","created","this","till","then","happy","coding"];
var count=0;
var correct=0;
var incorrect=0;

$(window).keypress(function(e){
    if(e.which == 32){
        var word=document.getElementById("container1").value;
        if(easy_words[count].trim()==word.trim()){
            $("#"+count).toggleClass("right");
            correct++;
        }
        else{
            $("#"+count).toggleClass("wrong");
            incorrect++;
        }
        count++;
        document.getElementById("container1").value="";
    }
});
document.getElementById("container1").onclick=function(){
    var timeleft=30
    var wpm;
    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = timeleft;
        timeleft -= 1;
        if(timeleft<=-2){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML="Time-up"
            if(timeleft==-2){
                wpm = correct/0.5;
                document.getElementById("result").innerHTML+="\nCorrectwords:"+correct;
                document.getElementById("result").innerHTML+="\n\nIncorrectwords:"+incorrect;
                document.getElementById("result").innerHTML+="\n\nWordsPerMinute:"+wpm;
        }
    }
   },1000);

}

$(".restart").click(function(){
    location.reload();

})
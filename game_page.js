play1_name=localStorage.getItem("player1");
play2_name=localStorage.getItem("player2");

document.getElementById("p1_name").innerHTML=play1_name+":";
document.getElementById("p2_name").innerHTML=play2_name+":";

player1_score=0;
player2_score=0;

document.getElementById("p1_score").innerHTML=player1_score;
document.getElementById("p2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn-"+play1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+play2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    charAt1=word.charAt(1);
    console.log(charAt1);
    
    length_divide_2=Math.floor(word.length/2);
    console.log(length_divide_2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);
    
     length_last=word.length-1;
     charAt3=word.charAt(length_last);
     console.log(length_last);
     console.log(charAt3);

     remove_charAt1=word.replace(charAt1,"_");
     console.log(remove_charAt1);

     remove_charAt2=remove_charAt1.replace(charAt2,"_");
     console.log(remove_charAt2);

     remove_charAt3=remove_charAt2.replace(charAt3,"_");
     console.log(remove_charAt3);

     question="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
     answer="<br>answer:<input type='text' id='input_box'>";
     check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row=question+answer+check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("word").value="";
}
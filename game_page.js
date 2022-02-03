player1_name = localStorage.getItem("Player 1");
  
player2_name = localStorage.getItem("Player 2");

player_1_score = 0;
player_2_score = 0;



document.getElementById("player_1_name").innerHTML = player1_name +" : ";

document.getElementById("player_2_name").innerHTML = player2_name +" : ";

document.getElementById("player_1_score").innerHTML= player_1_score ;

document.getElementById("player_2_score").innerHTML = player_2_score ;

document.getElementById("player_Question").innerHTML = "Question Turn :" + player1_name;

document.getElementById("player_Answer").innerHTML = "Answer Turn :" + player2_name;

function send()
{
    number1 = document.getElementById("number1").value ;
    number2 = document.getElementById("number2").value ;
    
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id ='input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}
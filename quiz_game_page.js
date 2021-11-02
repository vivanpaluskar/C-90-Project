player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML ="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML ="Answer Turn - " + player2_name;

function send(){
    number1_q=document.getElementById("question").value;
    number2_q=document.getElementById("question1").value;

    localStorage.setItem("number1_q" , number1_q);
    localStorage.setItem("number2_q" , number2_q);
    
    get_question = document.getElementById("question").value;
    question = get_question.toLowerCase();
    console.log("question in lower = " +question);

    question_text="<h4 id='word_display' Q.>"+number1_q+"X"+number2_q+"</h4>";
    input_box="<br> Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_text + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("question").value = "";
    document.getElementById("question1").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    answer = document.getElementById("input_check_box").value;
    console.log("answer - "+answer);

    if(answer == Math.imul(number1_q, number2_q)){

        if(answer_turn == "player1"){
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question turn - "+player2_name;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question turn - "+player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer turn - "+player2_name;
    }
    else{
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
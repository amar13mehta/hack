//age in days

function ageInDays() {
    var birthYear = prompt("What is your Birth Year");
    var ageDays= (2021-birthYear)*365 ;
    var h1 = document.createElement("h1");
    var textAns= document.createTextNode("You are "+ ageDays + " days old");
    h1.setAttribute('id', 'ageDays');
    h1.appendChild(textAns);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
    document.getElementById('ageDays').remove();
}

//cat-genrator

function generateCat(){
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "catgif.gif";
    div.appendChild(image);
}

//rock-paper-scissors

function refresh(){
    reload = location. reload();
}


function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice= numToChoice(randomRps());
    result = decideWinner(humanChoice, botChoice);
    message=finalMessage(result);
    rpsFrontEnd(yourChoice.id, botChoice, message);
    console.log(message);

}
function randomRps(){
    return Math.floor(Math.random()*3);
}
function numToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = 
    { 
     'rock': {'scissors': 1, 'rock': 0.5,'paper': 0},
     'paper': {'scissors': 0, 'rock': 1,'paper': 0.5},
     'scissors': {'scissors': 0.5, 'rock': 0,'paper': 1}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerscore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerscore];
    
}

function finalMessage([yourScore, computerscore]){
    if (yourScore === 0) {
        return {'message': 'You lost', 'color': 'red'};
    }
    else if (yourScore === 0.5) {
        return {'message': 'Draw', 'color': 'yellow'};
    } 
    else {
    return {'message': 'You Won', 'color': 'green'};
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice] + "'height=120 width=120 style='box-shadow: 0px 10px 50px rgb(0, 0, 255)'>"
    messageDiv.innerHTML="<h1 style='color: " + finalMessage["color"] + "; font-size: 40px; padding: 20px; '>" + finalMessage['message'] + "</h1>" 
    botDiv.innerHTML="<img src='" + imagesDatabase[botImageChoice] + "'height=120 width=120 style='box-shadow: 0px 10px 50px rgb(255, 0, 0)'>"
    

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}

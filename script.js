var oPositions = [];
var xPositions = [];
var dontChange = [];
document.body.onmousedown = function (e) {
    e = e || window.event;
    var elementId = (e.target || e.srcElement).id;
    if (elementId <= 9 && elementId >= 1 && !dontChange.includes(elementId) && document.getElementById('player').innerHTML!="player 1 wins" && document.getElementById('player').innerHTML!="player 2 wins" && document.getElementById('player').innerHTML!="It's a draw") {
        dontChange.push(elementId);
        var imgId = "img" + elementId;
        var player = document.getElementById('player');
        if (player.innerHTML == "Player 1 turn") {
            document.getElementById(imgId).src = "X.png";
            xPositions.push(elementId);
        }
        else {
            document.getElementById(imgId).src = "O.png";
            oPositions.push(elementId);
        }
        document.getElementById(imgId).width = "30";
        document.getElementById(imgId).height = "30";
        changePlayer()
    }
    //console.log(xPositions)
    if ((xPositions.includes("1") && xPositions.includes("2") && xPositions.includes("3")) ||
        (xPositions.includes("4") && xPositions.includes("5") && xPositions.includes("6")) ||
        (xPositions.includes("7") && xPositions.includes("8") && xPositions.includes("9")) ||
        (xPositions.includes("1") && xPositions.includes("5") && xPositions.includes("9")) ||
        (xPositions.includes("3") && xPositions.includes("5") && xPositions.includes("7")) ||
        (xPositions.includes("1") && xPositions.includes("4") && xPositions.includes("7")) ||
        (xPositions.includes("2") && xPositions.includes("5") && xPositions.includes("8")) ||
        (xPositions.includes("3") && xPositions.includes("6") && xPositions.includes("9")))
        document.getElementById('player').innerHTML="player 1 wins";
    else if ((oPositions.includes("1") && oPositions.includes("2") && oPositions.includes("3")) ||
        (oPositions.includes("4") && oPositions.includes("5") && oPositions.includes("6")) ||
        (oPositions.includes("7") && oPositions.includes("8") && oPositions.includes("9")) ||
        (oPositions.includes("1") && oPositions.includes("5") && oPositions.includes("9")) ||
        (oPositions.includes("3") && oPositions.includes("5") && oPositions.includes("7")) ||
        (oPositions.includes("1") && oPositions.includes("4") && oPositions.includes("7")) ||
        (oPositions.includes("2") && oPositions.includes("5") && oPositions.includes("8")) ||
        (oPositions.includes("3") && oPositions.includes("6") && oPositions.includes("9")))
        document.getElementById('player').innerHTML="player 2 wins";
        else if(dontChange.includes("1") && dontChange.includes("2") && dontChange.includes("3") && dontChange.includes("4") && dontChange.includes("5") && dontChange.includes("6") && dontChange.includes("7") && dontChange.includes("8") && dontChange.includes("9"))
        document.getElementById('player').innerHTML="It's a draw";
}

function changePlayer() {
    var player = document.getElementById('player');
    if (player.innerHTML == "Player 1 turn") {
        player.innerHTML = "Player 2 turn";
    }
    else {
        player.innerHTML = "Player 1 turn";
    }

}

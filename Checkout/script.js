var decrease = document.getElementById("decrease");
var increase = document.getElementById("increase");
var deerCaught = document.getElementById("deerCaught");

var deerCaughtNum = 0;

var deerTitle = document.getElementById("deerTitle");
var deerType = document.getElementById("deerType");
var buck = document.getElementById("buck");
var button = document.getElementById("button");
var doe = document.getElementById("doe");

var typesOfDeer =  ["----", "BUCK", "BUTTON", "DOE"];
var deerCaughtTypes = [];

var prev = document.getElementById("prev");
var next = document.getElementById("next");

var deerSelected = 1;

function changeDeerTypeDisplay(display){
    deerTitle.style.visibility = display;
    deerType.style.visibility = display;
    buck.style.visibility = display;
    button.style.visibility = display;
    doe.style.visibility = display;
    prev.style.visibility = display;
    next.style.visibility = display;
}
changeDeerTypeDisplay("hidden");

function setDeerTitle(){
    deerTitle.textContent = "Deer #" + deerSelected + " Type:";
    deerType.textContent = typesOfDeer[deerCaughtTypes[deerSelected - 1]];
}

decrease.onclick = function(){
    if (deerCaughtNum > 0){
        deerCaughtNum--;
        deerCaught.textContent = deerCaughtNum;
        deerCaughtTypes.pop();
        if(deerCaughtNum === 0){
            changeDeerTypeDisplay("hidden");
        }
        if(deerSelected > deerCaughtNum){
            deerSelected--;
            setDeerTitle();
        }
    }
};

increase.onclick = function(){
    if (deerCaughtNum < 5){
        deerCaughtNum++;
        deerCaught.textContent = deerCaughtNum;
        deerCaughtTypes.push(0);
        if(deerSelected < 1){
            deerSelected = 1;
            setDeerTitle();
        }
        changeDeerTypeDisplay("visible");
    }
};

buck.onclick = function(){
    deerCaughtTypes[deerSelected - 1] = 1;
    setDeerTitle();
}

button.onclick = function(){
    deerCaughtTypes[deerSelected - 1] = 2;
    console.log(deerCaughtTypes);
    setDeerTitle();
}

doe.onclick = function(){
    deerCaughtTypes[deerSelected - 1] = 3;
    setDeerTitle();
}


prev.onclick = function(){
    if(deerSelected > 1){
        deerSelected--;
        setDeerTitle();
    }
}
next.onclick = function(){
    if(deerSelected < deerCaughtNum){
        deerSelected++;
        setDeerTitle();
    }
}




async function addData(){

    const thisDate = (new Date()).toISOString().split("T")[0];

    const dataRef = db
        .collection("reserved")
        .doc("hunters")
        .collection("hunterID")
        .doc("h" + hID)
        .collection("dates")
        .doc(thisDate);

    var nums = [0, 0, 0]; //Buck, Button, Doe
    for(var i = 0;i < deerCaughtTypes.length;i++){
        if(deerCaughtTypes[i] === 1){
            nums[0]++
        } else if(deerCaughtTypes[i] === 2){
            nums[1]++;
        } else if(deerCaughtTypes[i] === 3){
            nums[2]++;
        }
    }

    await dataRef.update({
        buck: nums[0],
        button: nums[1],
        doe: nums[2]
    });

    window.location.href = '../HunterLogin/HunterLogin.html';
}


document.getElementById("submit").onclick = function goToCheckout(){
    addData();
}

document.getElementById("return").onclick = function goToCheckout(){
    window.location.href = '../Hunter/hunter.html';
}

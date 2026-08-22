var numberSelect = document.getElementById("hunterNumber");

for (var i = 0; i<=50; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    numberSelect.appendChild(opt);
}

const initials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var initialSelect = document.getElementById("hunterInitial");

for (var i = 0; i<initials.length; i++){
    var opt = document.createElement('option');
    opt.value = initials.charAt(i);
    opt.innerHTML = initials.charAt(i);
    initialSelect.appendChild(opt);
}


var submitID = document.getElementById("submitID");

async function checkInitial(){
    var number = document.getElementById("hunterNumber").value;
    var initial = document.getElementById("hunterInitial").value;
    
    const hunterIDRef = db
        .collection("reserved")
        .doc("hunters")
        .collection("hunterID")
        .doc("h" + number);
    
    var snap = await hunterIDRef.get();
    var hunterID = await snap.data()?.initial;

    console.log(number);
    console.log(intial);
    
    if(hunterID === initial){
        hID = number;
        sessionStorage.setItem("hunterId", hunterID);
        window.location.href = '../Hunter/hunter.html';
    }
}

submitID.addEventListener("click", () => {

    checkInitial();
    
});

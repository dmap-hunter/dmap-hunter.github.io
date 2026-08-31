var storedHunterId = 0;
sessionStorage.setItem("hunterID", 0);
var loggedIn = false;
var hID = 0;

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

function getLocalDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

var submitID = document.getElementById("submitID");

async function checkInitial(date = new Date()){
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
    console.log(initial);
    console.log(hunterID);
    
    if(hunterID === initial){
        hID = number;
        sessionStorage.setItem("hunterID", hID);
        
        const thisDate = typeof date === "string" ? date : getLocalDateKey(date);

        const hunterSpotsRef = db
            .collection("reserved")
            .doc("hunters")
            .collection("hunterID")
            .doc("h" + hID)
            .collection("dates")
            .doc(thisDate);

        const hunterSpotsSnap = await hunterSpotsRef.get();

        thisHunterSpots = asCellArray(hunterSpotsSnap);

        if(thisHunterSpots.length > 0){
            window.location.href = '../Transition/choose.html';
        } else{
            window.location.href = '../Hunter/hunter.html';
        }
    }
}

submitID.addEventListener("click", () => {
    checkInitial();
});

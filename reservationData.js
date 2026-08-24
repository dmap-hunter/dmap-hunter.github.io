var reservedSpots = [];
var hunterSpots = [];
var thisHunterSpots = [];

async function pullReserveSpots(thisDate){

    if (thisDate === undefined){
        thisDate = (new Date()).toISOString().split("T")[0];
    }

    //thisDate = (thisDate).toISOString().split("T")[0];

    const researchRef = db
        .collection("reserved")
        .doc("researchers")
        .collection("dates")
        .doc(thisDate);
    const snap = await researchRef.get();
    const cells = snap.data()?.cells;

    const hunterRef = db
        .collection("reserved")
        .doc("hunters")
        .collection("dates")
        .doc(thisDate);
    const snapH = await hunterRef.get();
    const cellsH = snapH.data()?.cells;

    const hunterIDRef = db
        .collection("reserved")
        .doc("hunters")
        .collection("hunterID")
        .doc("h" + hID)
        .collection("dates")
        .doc(thisDate);
    const snapHID = await hunterIDRef.get();
    const cellsHID = snapHID.data()?.cells;

    reservedSpots = [];
    (cells ?? []).forEach(value => reservedSpots.push(value));

    hunterSpots = [];
    (cellsH ?? []).forEach(value => hunterSpots.push(value));

    thisHunterSpots = [];
    (cellsHID ?? []).forEach(value => thisHunterSpots.push(value));

    console.log(thisHunterSpots);

    drawMap();
}

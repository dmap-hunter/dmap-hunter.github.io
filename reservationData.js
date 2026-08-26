var reservedSpots = [];
var hunterSpots = [];
var thisHunterSpots = [];
var buck = 0;
var button = 0;
var doe = 0;
var hours = 0.0;

async function pullReserveSpots(thisDate){

    const formatter = new Intl.DateTimeFormat("fr-CA", { // 'fr-CA' naturally uses YYYY-MM-DD format
        timeZone: "America/New_York",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    thisDate = formatter.format(new Date());

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

    const statsRef = db
        .collection("reserved")
        .doc("hunters")
        .collection("hunterID")
        .doc("h" + hID);
    var snapStats = await statsRef.get();
    buckT = await snapStats.data()?.buck;
    buttonT = await snapStats.data()?.button;
    doeT = await snapStats.data()?.doe;
    hoursT = await snapStats.data()?.hours;

    if(buckT){buck = buckT}
    if(buttonT){button = buttonT}
    if(doeT){doe = doeT}
    if(hoursT){hours = hoursT}

    drawMap();
}

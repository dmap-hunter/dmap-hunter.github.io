const bucksS = document.querySelector("#bucks");
const buttonsS = document.querySelector("#buttons");
const doesS = document.querySelector("#does");

const updateSliderB = () => {
  const { min, max, value } = bucksS;
  const progress = ((value - min) / (max - min)) * 100;

  bucksS.style.setProperty("--fill", `${progress}%`);
};
const updateSliderBu = () => {
  const { min, max, value } = buttonsS;
  const progress = ((value - min) / (max - min)) * 100;

  buttonsS.style.setProperty("--fill", `${progress}%`);
};
const updateSliderD = () => {
  const { min, max, value } = doesS;
  const progress = ((value - min) / (max - min)) * 100;

  doesS.style.setProperty("--fill", `${progress}%`);
};

bucksS.addEventListener("input", updateSliderB);
buttonsS.addEventListener("input", updateSliderBu);
doesS.addEventListener("input", updateSliderD);
updateSliderB();
updateSliderBu();
updateSliderD();

async function addData(){

    const formatter = new Intl.DateTimeFormat("fr-CA", { // 'fr-CA' naturally uses YYYY-MM-DD format
        timeZone: "America/New_York",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    thisDate = formatter.format(new Date());

    const hunterRef = db
        .collection("reserved")
        .doc("hunters")
        .collection("hunterID")
        .doc("h" + hID);
    var snap = await hunterRef.get();
    var pBuck = parseInt(await snap.data()?.buck) || 0;
    var pButton = parseInt(await snap.data()?.button) || 0;
    var pDoe = parseInt(await snap.data()?.doe) || 0;
    var pHours = parseInt(await snap.data()?.hours) || 0;

    console.log(hunterRef);

    const dataRef = db
        .collection("reserved")
        .doc("hunters")
        .collection("hunterID")
        .doc("h" + hID)
        .collection("dates")
        .doc(thisDate);
    var snap2 = await dataRef.get();
    var tBuck = parseInt(await snap2.data()?.buck) || 0;
    var tButton = parseInt(await snap2.data()?.button) || 0;
    var tDoe = parseInt(await snap2.data()?.doe) || 0;
    var tStart = parseInt(await snap2.data()?.start) || 0;
    var tHours = parseInt(await snap2.data()?.hours) || 0;

    var nums = [parseInt(bucksS.value), parseInt(buttonsS.value), parseInt(doesS.value), (Date.now() - tStart) / 1000 / 60 / 60]; //Buck, Button, Doe, Date

    try{
        await dataRef.update({
            buck: tBuck + nums[0],
            button: tButton + nums[1],
           doe: tDoe + nums[2],
           hours: nums[3]
        });
    } catch{
        //window.location.href = '../Transition/choose.html';
        return;
    }

    await hunterRef.update({
        buck: pBuck + nums[0],
        button: pButton + nums[1],
        doe: pDoe + nums[2],
        hours: pHours - tHours + nums[3]
    });

    window.location.href = '../Transition/postCheckout.html';
}


document.getElementById("submit").onclick = function goToCheckout(){
    addData();
}

document.getElementById("goback").onclick = function goToCheckout(){
    window.location.href = '../Transition/choose.html';
}

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

    const dataRef = db
        .collection("reserved")
        .doc("hunters")
        .collection("hunterID")
        .doc("h" + hID)
        .collection("dates")
        .doc(thisDate);

    var nums = [bucksS.value, buttonsS.value, doesS.value]; //Buck, Button, Doe

    await dataRef.update({
        buck: nums[0],
        button: nums[1],
        doe: nums[2]
    });

    window.location.href = '../Transition/postCheckout.html';
}


document.getElementById("submit").onclick = function goToCheckout(){
    addData();
}

document.getElementById("goback").onclick = function goToCheckout(){
    window.location.href = '../Transition/choose.html';
}

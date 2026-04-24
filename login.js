
async function checkPassword(value){

    const password = db
        .collection("reserved")
        .doc("password");

    const snap = await password.get();
    const pass = snap.data().password;

    console.log(pass);
    console.log(value);
    console.log(pass === value);

    if(value !== pass){
        window.location.replace("https://dmap-hunter.github.io/Password/password.html");
    }

}

async function checkPasswordPass(value){

    const password = db
        .collection("reserved")
        .doc("password");

    const snap = await password.get();
    const pass = snap.data().password;

    console.log(pass);
    console.log(value);
    console.log(pass === value);

    if(value === pass){
        window.location.replace("https://dmap-hunter.github.io/Research/research.html");
    }

}




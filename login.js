
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User logged in:", user.email);
    } else {
        console.log("No user logged in");
        window.location.href = '../Password/password.html';
    }
});


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
        window.location.replace("../Research/research.html");
    }

}




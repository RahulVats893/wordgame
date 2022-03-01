const arr = ["rahul", "tgh", "huhhd", "hydhd", "hsui", "syhs", "sisun", "rajat", "like", "insta", "mart", "poking", "secandarant"];
let newword = "";
let correctwordd = document.getElementById('correctword');
let parentwordd = document.getElementById('parentword');
let wrongwordd = document.getElementById('wrongword');
let wrongworddparent = document.getElementById('wrongwordparent');


getword();

function getword() {
    let element = document.getElementById('wordarr').style.top = "0px";
    const word = arr[Math.floor(Math.random() * arr.length)];
    newword = document.getElementById('wordarr').innerText = word;

    let top = 105;
    Animateme();


    function Animateme() {
        if (top == 500) {
            top = 105;
            word = arr[Math.floor(Math.random() * arr.length)];
            newword = document.getElementById('wordarr').innerText = word;
            checkword();
        }

        const element1 = document.getElementById('wordarr');
        element1.style.top = `${top}px`;
        top++;
        requestAnimationFrame(Animateme);
        return;
    }
    window.requestAnimationFrame(Animateme);
}

function checkword() {
    let enterword = document.getElementById('enterword').value;
    console.log(enterword);
    if (enterword == newword) {
        console.log(enterword);
        parentwordd.innerHTML += `<span>${enterword}</span>`



    } else {
        // alert('wrong word');
        // console.log("wrongword");
        wrongworddparent.innerHTML += `<span  >${enterword}</span>`

    }
    // enterword.innerText = "";
    document.getElementById('enterword').value = "";

}
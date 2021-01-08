// Controller
// let outerCircle = document.getElementById('outerCircle');
function metronome() {
    let timing = parseInt(timeSignature.substr(0, timeSignature.indexOf('/')));
    let num = 0;
    while (metronomeOn == true) {
        timer();
        // setTimeout(function(){
        //     outerCircle.style.backgroundColor = 'grey';
        // }, Math.round(BPM/60*1000))
        // num < timing ? num++ : num = 0;
    }

}
function timer() {
    for (let i = 0; i < 5; i++) {
        if (num == 0) {
            document.getElementById('outerCircle').style.backgroundColor = 'red'; 
        }
        else {
            outerCircle.style.backgroundColor = 'green';
        }
    }
}
function startStop() {
    metronomeOn != metronomeOn;
    console.log(metronomeOn);
}

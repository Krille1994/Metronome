function startStop() {
    if (model.metronome.metronomeOn) {
        model.metronome.metronomeOn = false;
        clearInterval(mainInterval);
        clearInterval(subInterval);
        timer = model.metronome.timing.upper;
    }
    else {
        model.metronome.metronomeOn = true;
        startTimer();
    }
}
let mainInterval;
let subInterval;
let timer = model.metronome.timing.upper;
function startTimer() {
    startSubtimer();
    mainInterval = setInterval(mainTimer, 60/model.metronome.bpm*1000);
}
function mainTimer() {
    if (timer == model.metronome.timing.upper) {
        model.metronome.color = 'red';
        showMetronome();
    }
    else {
        model.metronome.color = 'green';
        showMetronome();
    }
    timer == 1 ? timer = model.metronome.timing.upper : timer--;
}
function startSubtimer() {
    setTimeout(function() {
        subInterval = setInterval(subTimer, 60/model.metronome.bpm*1000)
    }, 100);
}
function subTimer() {
    model.metronome.color = 'grey';
    showMetronome();
}

// funksjon for å vise alternativer til tidssignaturene i metronomet
function timingAlternatives() {
    if (!model.metronome.metronomeOn) {
        let html = '<div id="timingDiv">';
        for (let i = 0; i < model.metronome.timing.allTimings.length; i++) {
            html += `
                <div onclick="chooseTimingAlternatives(this.innerHTML)">${model.metronome.timing.allTimings[i]}</div>
            `;
        }
        app.innerHTML = html + '</div>';
    }
}
function chooseTimingAlternatives(timing) {
    model.metronome.timing.upper = timing.substr(0, timing.indexOf('/'));
    model.metronome.timing.lower = timing.substr(timing.indexOf('/')+1);

    showMetronome();
}

// funksjon for å vise alterntive BPMer
function bpmAlternatives() {
    if (!model.metronome.metronomeOn) {
        let html = '<div id="timingDiv">';
        for (let i = 30; i <= 240; i += 5) {
            html += `
                <div onclick="chooseBpmAlternatives(this.innerHTML)">${i}</div>
            `;
        }
        app.innerHTML = html + '</div>';
    }
}
function chooseBpmAlternatives(beat) {
    model.metronome.bpm = parseInt(beat);
    showMetronome();
}

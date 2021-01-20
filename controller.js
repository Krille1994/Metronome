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


// funksjoner for Chords 

function selectChordLetter(div) {
    if (model.chordsPage.chosenChordLetter != div.innerHTML) {
        model.chordsPage.chosenChordLetter = div.innerHTML;
        resetSelectedChord();
        showChords();
    }
}
// funksjon for tegning av chords
function drawChord(x,y, bool) {
let string = model.createChordsPage;
    if (x == 0) {string.EString === y ? string.EString = 0 : string.EString = y}
    if (x == 1) {string.aString === y ? string.aString = 0 : string.aString = y}
    if (x == 2) {string.dString === y ? string.dString = 0 : string.dString = y}
    if (x == 3) {string.gString === y ? string.gString = 0 : string.gString = y}
    if (x == 4) {string.bString === y ? string.bString = 0 : string.bString = y}
    if (x == 5) {string.eString === y ? string.eString = 0 : string.eString = y}

    createChordsView(bool);
}

function createChordSelectFret(i) {
    model.createChordsPage.startFret = parseInt(i);
}
function resetCreateChords() {
    model.createChordsPage = {
        startFret: 0,
        EString: 0,
        aString: 0,
        dString: 0,
        gString: 0,
        bString: 0,
        eString: 0,
    },
    showChords();
}
function selectChord(i, o, u) {
    let selected = model.chordsPage.selectedChord;
    if (selected[0] === i && selected[1] === o && selected[2] === u) {
        resetSelectedChord();
    }
    else {
        model.chordsPage.selectedChord = [i, o, u];
    }
    showChords();
}

function deleteChordFunction() {
    if (confirm('Press OK to delete chord')) {
        model.chordsPage.allChords[model.chordsPage.selectedChord[0]].chord[model.chordsPage.selectedChord[1]].chords.splice(model.chordsPage.selectedChord[2], 1);
        resetSelectedChord();
    }
    showChords();
}

function addChord() {
    for (let i = 0; i < model.chordsPage.allChords.length; i++) {
        if (model.chordsPage.allChords[i].letter == model.chordsPage.chosenChordLetter) {
            for (let o = 0; o < model.chordsPage.allChords[i].chord.length; o++) {
                if (model.chordsPage.allChords[i].chord[o].type == model.chordsPage.chosenChordType) {
                    model.chordsPage.allChords[i].chord[o].chords.push(model.createChordsPage);
                    resetCreateChords();
                }
            }
        }
    }
    showChords();
}

function changeChord() {
    let x = model.chordsPage.selectedChord;
    model.createChordsPage = model.chordsPage.allChords[x[0]].chord[x[1]].chords[x[2]];
    createChordsView(false);
}
function saveChangedChord() {
    let x = model.chordsPage.selectedChord;
    model.chordsPage.allChords[x[0]].chord[x[1]].chords[x[2]] = model.createChordsPage;
    resetSelectedChord();
    resetCreateChords();
    showChords();
}
function resetSelectedChord() {
    model.chordsPage.selectedChord = ['', '', ''];
}

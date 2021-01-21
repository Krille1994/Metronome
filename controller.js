function startStop() {
    if (model.metronome.metronomeOn) {
        model.metronome.metronomeOn = false;
        clearInterval(mainInterval);
        clearInterval(subInterval);
        model.metronome.timing.timer = model.metronome.timing.upper;
    }
    else {
        model.metronome.metronomeOn = true;
        startTimer();
    }
}
let mainInterval;
let subInterval;
function startTimer() {
    startSubtimer();
    mainInterval = setInterval(mainTimer, 60/model.metronome.bpm*1000);
}
function mainTimer() {
    if (model.metronome.timing.timer == model.metronome.timing.upper) {
        model.metronome.color = 'red';
        showMetronome();
    }
    else {
        model.metronome.color = 'green';
        showMetronome();
    }
    model.metronome.timing.timer == 1 ? model.metronome.timing.timer = model.metronome.timing.upper : model.metronome.timing.timer--;
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

function chooseTimingAlternatives(timing) {
    if (typeof(timing) != 'string' || timing.length != 3){
        model.metronome.timing.upper = 4;
        model.metronome.timing.lower = 4;
    }
    else {
        model.metronome.timing.upper = parseInt(timing.substr(0, timing.indexOf('/')));
        model.metronome.timing.lower = timing.substr(timing.indexOf('/')+1,1);
    }

    showMetronome();
}

// funksjon for å vise alterntive BPMer

function chooseBpmAlternatives(beat) {
    
    if (beat <= 240 && beat >= 30 && (typeof(beat) == 'number' ||typeof(beat) == 'string' && parseInt(beat) != 'number')) {
        model.metronome.bpm = parseInt(beat);
        showMetronome();
    }
    else {
        model.metronome.bpm = 60;
        showMetronome();
    }
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

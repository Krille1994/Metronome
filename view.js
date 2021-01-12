let app = document.getElementById('app');
function showStartsite() {
    app.innerHTML = `
        <div onclick="showMetronome()">Metronome</div>
        <div onclick="showChords()">Chords</div>
        `;
}
showStartsite();

function showMetronome() {
    app.innerHTML = `
        <div>
            <div id="outerCircle" style="background-color: ${model.metronome.color}">
                <div id="innerCircle">
                    <div id="metValues">
                        <div id="timeSignature"onclick="timingAlternatives()">${model.metronome.timing.upper}/${model.metronome.timing.lower}</div>
                        <div id="startButton" onclick="startStop()">start</div>
                        <div id="BPM" onclick="bpmAlternatives()">${model.metronome.bpm}</div>
                    </div>
                </div>
            <div>
        </div>
        `;
}

function showChords() {
    let chords = model.chordsPage;
    let html = '<div id="chordsList">';
    for (let i = 0; i < chords.chordLetterList.length; i++) {
        if (chords.chosenChordLetter === chords.chordLetterList[i]) {
            html += `<div class="chordLetter greenChordLetter">${chords.chordLetterList[i]} </div>`;
        }
        else {
            html += `<div class="chordLetter">${chords.chordLetterList[i]} </div>`;
        }
    }
    html += '</div><div id="chordType">';
    for (let i = 0; i < chords.chordTypes.length; i++) {
        if (chords.chordTypes[i].chosen){
            html += `
                <label for="${chords.chordTypes[i].type}">${chords.chordTypes[i].type}</label>
                <input type="checkbox" id="${chords.chordTypes[i].type}" checked><br>
            `;
        }
        else {
            html += `
                <label for="${chords.chordTypes[i].type}">${chords.chordTypes[i].type}</label>
                <input type="checkbox" id="${chords.chordTypes[i].type}"><br>
            `;
        }
    }
    html += '</div><button>Add Chord</button>';
    // html += showChordsHelp();
    app.innerHTML = html;
}

function showChordsHelp() {
    let chords = model.chordsPage;
    for (let i = 0; i < chords.allChords.length; i++) {
        if (chords.chosenChordLetter === chords.allChords[i].letter) {
            console.log(chords.allChords[i].chord);
            for (let o = 0; o < chords.allChords[i].chord.length; o++) {
                if (chords.allChords[i].chord[o].type == chords.chosenChordType) {
                    console.log(chords.allChords[i].letter, chords.allChords[i].chord[o]);
                }
            }
        }
    }
    
    let html = `
        <div id="chordsDisplay"></div>
    `;
}

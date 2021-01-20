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

function createChordsView(bool) {
    let html = `
    <div id="returnButton" onclick="resetCreateChords()">Go Back</div>
    <div id="createChordsShowLetter">${model.chordsPage.chosenChordLetter}</div>
    <div id="createChordsShowType">${model.chordsPage.chosenChordType}</div>

    <div id="createChordsDiv">
        <svg width="500" height="800">
            <line x1="25" y1="25" x2="25" y2="775" style="stroke: black; stroke-width: 2;"/>
            <line x1="115" y1="25" x2="115" y2="775" style="stroke: black; stroke-width: 2;"/>
            <line x1="205" y1="25" x2="205" y2="775" style="stroke: black; stroke-width: 2;"/>
            <line x1="295" y1="25" x2="295" y2="775" style="stroke: black; stroke-width: 2;"/>
            <line x1="385" y1="25" x2="385" y2="775" style="stroke: black; stroke-width: 2;"/>
            <line x1="475" y1="25" x2="475" y2="775" style="stroke: black; stroke-width: 2;"/>

            <line x1="24" y1="25" x2="476" y2="25" style="stroke: black; stroke-width: 2;"/>
            <line x1="25" y1="175" x2="475" y2="175" style="stroke: black; stroke-width: 2;"/>
            <line x1="25" y1="325" x2="475" y2="325" style="stroke: black; stroke-width: 2;"/>
            <line x1="25" y1="475" x2="475" y2="475" style="stroke: black; stroke-width: 2;"/>
            <line x1="25" y1="625" x2="475" y2="625" style="stroke: black; stroke-width: 2;"/>
            <line x1="24" y1="775" x2="476" y2="775" style="stroke: black; stroke-width: 2;"/>
    `;
    let strings = model.createChordsPage;
    if (model.createChordsPage.EString === false) {
        html += `
        <circle cx="25" cy="25" r="25" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.EString == i+1) {
                html += `
                <circle cx="25" cy="${100+(i*150)}" r="25" fill="red"/>
                `;
            }
        }
    }
    if (model.createChordsPage.aString === false) {
        html += `
        <circle cx="115" cy="25" r="25" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.aString == i+1) {
                html += `
                <circle cx="115" cy="${100+(i*150)}" r="25" fill="red"/>
                `;
            }
        }
    }
    if (model.createChordsPage.dString === false) {
        html += `
        <circle cx="205" cy="25" r="25" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.dString == i+1) {
                html += `
                <circle cx="205" cy="${100+(i*150)}" r="25" fill="red"/>
                `;
            }
        }
    }
    if (model.createChordsPage.gString === false) {
        html += `
        <circle cx="295" cy="25" r="25" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.gString == i+1) {
                html += `
                <circle cx="295" cy="${100+(i*150)}" r="25" fill="red"/>
                `;
            }
        }
    }
    if (model.createChordsPage.bString === false) {
        html += `
        <circle cx="385" cy="25" r="25" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.bString == i+1) {
                html += `
                <circle cx="385" cy="${100+(i*150)}" r="25" fill="red"/>
                `;
            }
        }
    }
    if (model.createChordsPage.eString === false) {
        html += `
        <circle cx="475" cy="25" r="25" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.eString == i+1) {
                html += `
                <circle cx="475" cy="${100+(i*150)}" r="25" fill="red"/>
                `;
            }
        }
    }
    html += `
    // rektangler for muting av strenger
    <rect x="0" y="0" width="50" height="50" style="fill-opacity: 0" onclick="drawChord(0,false, ${bool})"/>
    <rect x="90" y="0" width="50" height="50" style="fill-opacity: 0" onclick="drawChord(1,false, ${bool})"/>
    <rect x="180" y="0" width="50" height="50" style="fill-opacity: 0" onclick="drawChord(2,false, ${bool})"/>
    <rect x="270" y="0" width="50" height="50" style="fill-opacity: 0" onclick="drawChord(3,false, ${bool})"/>
    <rect x="360" y="0" width="50" height="50" style="fill-opacity: 0" onclick="drawChord(4,false, ${bool})"/>
    <rect x="450" y="0" width="50" height="50" style="fill-opacity: 0" onclick="drawChord(5,false, ${bool})"/>

        // Rektangler for 1 fret
    <rect x="0" y="50" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(0,1, ${bool})"/>
    <rect x="90" y="50" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(1,1, ${bool})"/>
    <rect x="180" y="50" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(2,1, ${bool})"/>
    <rect x="270" y="50" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(3,1, ${bool})"/>
    <rect x="360" y="50" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(4,1, ${bool})"/>
    <rect x="450" y="50" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(5,1, ${bool})"/>

        // Rektangler for 2 fret
    <rect x="0" y="200" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(0,2, ${bool})"/>
    <rect x="90" y="200" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(1,2, ${bool})"/>
    <rect x="180" y="200" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(2,2, ${bool})"/>
    <rect x="270" y="200" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(3,2, ${bool})"/>
    <rect x="360" y="200" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(4,2, ${bool})"/>
    <rect x="450" y="200" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(5,2, ${bool})"/>

        // Rektangler for 3 fret
    <rect x="0" y="350" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(0,3, ${bool})"/>
    <rect x="90" y="350" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(1,3, ${bool})"/>
    <rect x="180" y="350" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(2,3, ${bool})"/>
    <rect x="270" y="350" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(3,3, ${bool})"/>
    <rect x="360" y="350" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(4,3, ${bool})"/>
    <rect x="450" y="350" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(5,3, ${bool})"/>
        
        // Rektangler for 4 fret
    <rect x="0" y="500" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(0,4, ${bool})"/>
    <rect x="90" y="500" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(1,4, ${bool})"/>
    <rect x="180" y="500" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(2,4, ${bool})"/>
    <rect x="270" y="500" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(3,4, ${bool})"/>
    <rect x="360" y="500" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(4,4, ${bool})"/>
    <rect x="450" y="500" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(5,4, ${bool})"/>

        // Rektangler for 5 fret
    <rect x="0" y="650" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(0,5, ${bool})"/>
    <rect x="90" y="650" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(1,5, ${bool})"/>
    <rect x="180" y="650" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(2,5, ${bool})"/>
    <rect x="270" y="650" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(3,5, ${bool})"/>
    <rect x="360" y="650" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(4,5, ${bool})"/>
    <rect x="450" y="650" width="50" height="100" style="fill-opacity: 0" onclick="drawChord(5,5, ${bool})"/>

        </svg>
    </div>

    <div>
        <form>
            <select id="fretAlternatives" name="fretAlternatives" onchange="createChordSelectFret(this.value)">`
            for (let i = 0; i < 12; i++) {
                if (model.createChordsPage.startFret == i) {
                    html += `
                        <option value="${i}" selected>Fret ${i}</option>
                    `;
                }
                else {
                    html += `
                        <option value="${i}">Fret ${i}</option>
                    `;
                }
            }
                html += `
            </select>
        </form>
    </div>
    <div id="saveChordButton" onclick="${bool ? 'addChord()' : 'saveChangedChord()'}">Save Chord</div>
    `;   

    app.innerHTML = html;
}

function showChords() {
    let chords = model.chordsPage;
    let html = '<div id="chordsList">';
    for (let i = 0; i < chords.chordLetterList.length; i++) {
        if (chords.chosenChordLetter === chords.chordLetterList[i]) {
            html += `<div class="chordLetter greenChordLetter">${chords.chordLetterList[i]}</div>`;
        }
        else {
            html += `<div class="chordLetter" onclick="selectChordLetter(this)">${chords.chordLetterList[i]}</div>`;
        }
    }
    html += '</div><div id="chordType">';
    for (let i = 0; i < chords.chordTypes.length; i++) {
        if (chords.chordTypes[i] == chords.chosenChordType){
            html += `
                <label class="chordTypes" for="${chords.chordTypes[i]}">${chords.chordTypes[i]}</label>
                <input type="checkbox" id="${chords.chordTypes[i]}" checked onchange="model.chordsPage.chosenChordType = this.id, showChords()"><br>
            `;
        }
        else {
            html += `
                <label class="chordTypes" for="${chords.chordTypes[i]}">${chords.chordTypes[i]}</label>
                <input type="checkbox" id="${chords.chordTypes[i]}" onchange="model.chordsPage.chosenChordType = this.id, showChords()"><br>
            `;
        }
    }
    html += `</div>
            <button id="addButton" class="chordButtons" onclick="createChordsView(true)">Add Chord</button>
            <button id="changeButton" class="chordButtons" onclick="changeChord()"
            ${chords.selectedChord[0] !== '' ? '' : 'disabled'}>Change Chord</button>
            <button id="deleteButton" class="chordButtons" onclick="deleteChordFunction()" ${chords.selectedChord[0] !== '' ? '' : 'disabled'}>Delete Chord</button>
    `;
    html += showChordsHelp();
    app.innerHTML = html;
}

function showChordsHelp() {
    let chords = model.chordsPage;
    let html = '';
    for (let i = 0; i < chords.allChords.length; i++) {
        if (chords.chosenChordLetter === chords.allChords[i].letter) {
            for (let o = 0; o < chords.allChords[i].chord.length; o++) {
                if (chords.allChords[i].chord[o].type == chords.chosenChordType) {
                    for (let u = 0; u < chords.allChords[i].chord[o].chords.length; u++) {
                        let selected = model.chordsPage.selectedChord;
                        html += `<div onclick="selectChord(${i}, ${o}, ${u})">`;
                        if (selected[0] === i && selected[1] === o && selected[2] === u) {
                            html += `
                            <div class="fretboard" style="background-color: green;">
                            `;
                        }
                        else {
                            html += `
                            <div class="fretboard">
                            `;
                        }
                            html += `
                                <svg width="220" height="320">

                                <!-- vertical lines -->
                                    <line x1="10" y1="10" x2="10" y2="310" style="stroke: black; stroke-width: 2;"/>
                                    <line x1="50" y1="10" x2="50" y2="310" style="stroke: black; stroke-width: 2;"/>
                                    <line x1="90" y1="10" x2="90" y2="310" style="stroke: black; stroke-width: 2;"/>
                                    <line x1="130" y1="10" x2="130" y2="310" style="stroke: black; stroke-width: 2;"/>
                                    <line x1="170" y1="10" x2="170" y2="310" style="stroke: black; stroke-width: 2;"/>
                                    <line x1="210" y1="10" x2="210" y2="310" style="stroke: black; stroke-width: 2;"/>

                                <!-- horizontal lines -->
                                    <line x1="9" y1="10" x2="211" y2="10" style="stroke: black; stroke-width: ${chords.allChords[i].chord[o].chords[u].startFret == 0 ? '6' : '2'};"/>
                                    <line x1="9" y1="70" x2="211" y2="70" style="stroke: black; stroke-width: 2;"/>
                                    <line x1="9" y1="130" x2="211" y2="130" style="stroke: black; stroke-width: 2;"/>
                                    <line x1="9" y1="190" x2="211" y2="190" style="stroke: black; stroke-width: 2;"/>
                                    <line x1="9" y1="250" x2="211" y2="250" style="stroke: black; stroke-width: 2;"/>
                                    <line x1="9" y1="310" x2="211" y2="310" style="stroke: black; stroke-width: 2;"/>`;

                        html += showChordsHelp2(chords.allChords[i].chord[o].chords[u]);

                                html += `
                                </svg>
                            </div>
                        </div>`;
                        if (chords.allChords[i].chord[o].chords[u].startFret !== 0) {
                            html += `
                            <div class="startFret">Fret: ${chords.allChords[i].chord[o].chords[u].startFret}</div>
                            `;
                        } 
                    }
                }
            }
        }
    }
    return html;
}
function showChordsHelp2(strings) {
    let html = '';
    if (strings.EString === false) {
        html += `
            <circle cx="10" cy="10" r="10" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.EString == i+1) {
                html += `
                <circle cx="10" cy="${40+(i*60)}" r="10" fill="red"/>
                `;
            }
        }
    }
    if (strings.aString === false) {
        html += `
            <circle cx="50" cy="10" r="10" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.aString == i+1) {
                html += `
                <circle cx="50" cy="${40+(i*60)}" r="10" fill="red"/>
                `;
            }
        }
    }
    if (strings.dString === false) {
        html += `
            <circle cx="90" cy="10" r="10" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.dString == i+1) {
                html += `
                <circle cx="90" cy="${40+(i*60)}" r="10" fill="red"/>
                `;
            }
        }
    }
    if (strings.gString === false) {
        html += `
            <circle cx="130" cy="10" r="10" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.gString == i+1) {
                html += `
                <circle cx="130" cy="${40+(i*60)}" r="10" fill="red"/>
                `;
            }
        }
    }
    if (strings.bString === false) {
        html += `
            <circle cx="170" cy="10" r="10" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.bString == i+1) {
                html += `
                <circle cx="170" cy="${40+(i*60)}" r="10" fill="red"/>
                `;
            }
        }
    }
    if (strings.estring === false) {
        html += `
            <circle cx="210" cy="10" r="10" fill="grey"/>
        `;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (strings.eString == i+1) {
                html += `
                <circle cx="210" cy="${40+(i*60)}" r="10" fill="red"/>
                `;
            }
        }
    }
    return html;
}

let app = document.getElementById('app');
function showStartsite() {
    app.innerHTML = `
        <div onclick="showMetronome()">Metronome</div>
        <div onclick="show('chords')">Chords</div>
        `;
}
showStartsite();

function showMetronome() {
    app.innerHTML = `
        <div>
            <div id="outerCircle">
                <div id="innerCircle">
                    <div id="metValues">
                        <div id="timeSignature">${model.metronome.timing.upper}/4${model.metronome.timing.lower}</div>
                        <div id="startButton" onclick="startStop()">start</div>
                        <div id="BPM">${model.metronome.bpm}</div>
                    </div>
                </div>
            <div>
        </div>
        `;
}
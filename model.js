const model = {
    metronome: {
        timing: {
            upper: 4,
            lower: 4,
            allTimings: ['2/4', '3/4', '4/4', '2/2', '3/2', '4/2', '2/8', '3/8', '4/8', ],
        },
        bpm: 120,
        metronomeOn: false,
        color: 'grey',
    },
    chordsPage: {
        chosenChordLetter: 'C',
        chosenChordType: 'Major',
        selectedChord: ['','',''],
        chordLetterList: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
        chordTypes: [
            'Major',
            'Minor',
            'Diminished',
            'Major7th',
            'Minor7th',
            'Dominant7th',
            'Suspended',
            'Augmented',
            'Extended',
            'Other',
        ],
        allChords: [
            {
                letter: 'C',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: 3,
                                dString: 2,
                                gString: 0,
                                bString: 1,
                                eString: 0,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 3,
                                EString: false,
                                aString: false,
                                dString: 3,
                                gString: 3,
                                bString: 2,
                                eString: 1,
                            },
                        ],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'C#',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 1,
                                EString: false,
                                aString: 3,
                                dString: 2,
                                gString: 0,
                                bString: 1,
                                eString: 0,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 4,
                                EString: false,
                                aString: 1,
                                dString: 3,
                                gString: 3,
                                bString: 2,
                                eString: 1,
                            },
                        ],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        chords: [],
                    },
                    {
                        type: 'Extended',
                        chords: [],
                    },
                    {
                        type: 'Other',
                        chords: [],
                    },
                ],
            },
            {
                letter: 'D',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: false,
                                dString: 0,
                                gString: 2,
                                bString: 3,
                                eString: 2,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: false,
                                dString: 0,
                                gString: 1,
                                bString: 3,
                                eString: 2,
                            },
                        ],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        chords: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'D#',
                Dsharp: [
                    {
                        type: 'Major',
                        chords: [],
                    },
                    {
                        type: 'Minor',
                        chords: [],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'E',
                E: [
                    {
                        type: 'Major',
                        chords: [],
                    },
                    {
                        type: 'Minor',
                        chords: [],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'F',
                F: [
                    {
                        type: 'Major',
                        chords: [],
                    },
                    {
                        type: 'Minor',
                        chords: [],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'F#',
                Fsharp: [
                    {
                        type: 'Major',
                        chords: [],
                    },
                    {
                        type: 'Minor',
                        chords: [],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'G',
                G: [
                    {
                        type: 'Major',
                        chords: [],
                    },
                    {
                        type: 'Minor',
                        chords: [],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'G#',
                Gsharp: [
                    {
                        type: 'Major',
                        chords: [],
                    },
                    {
                        type: 'Minor',
                        chords: [],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'A',
                A: [
                    {
                        type: 'Major',
                        chords: [],
                    },
                    {
                        type: 'Minor',
                        chords: [],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'A#',
                Asharp: [
                    {
                        type: 'Major',
                        chords: [],
                    },
                    {
                        type: 'Minor',
                        chords: [],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
            {
                letter: 'B',
                B: [
                    {
                        type: 'Major',
                        chords: [],
                    },
                    {
                        type: 'Minor',
                        chords: [],
                    },
                    {
                        type: 'Diminished',
                        chords: [],
                    },
                    {
                        type: 'Major7th',
                        chords: [],
                    },
                    {
                        type: 'Minor7th',
                        chords: [],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [],
                    },
                    {
                        type: 'Suspended',
                        chords: [],
                    },
                    {
                        type: 'Augmented',
                        augmented: [],
                    },
                    {
                        type: 'Extended',
                        extended: [],
                    },
                    {
                        type: 'Other',
                        other: [],
                    },
                ],
            },
        ],
    },
    createChordsPage: {
        startFret: 0,
        EString: 1,
        aString: 0,
        dString: 0,
        gString: 0,
        bString: 0,
        eString: 0,
    },
}
const model = {
    metronome: {
        timing: {
            timer: 4,
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
                            {
                                startFret: 2,
                                EString: false,
                                aString: 1,
                                dString: 3,
                                gString: 3,
                                bString: 3,
                                eString: 1,
                            },
                            {
                                startFret: 4,
                                EString: false,
                                aString: false,
                                dString: 1,
                                gString: 1,
                                bString: 1,
                                eString: 4,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: 3,
                                dString: 1,
                                gString: 0,
                                bString: 1,
                                eString: 3,
                            },
                            {
                                startFret: 2,
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
                        type: 'Major7th',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: false,
                                dString: 2,
                                gString: 4,
                                bString: 1,
                                eString: 3,
                            },
                        ],
                    },
                    {
                        type: 'Minor7th',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: 3,
                                dString: 1,
                                gString: 3,
                                bString: 1,
                                eString: false,
                            },
                        ],
                    },
                    {
                        type: 'Dominant7th',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: 3,
                                dString: 2,
                                gString: 3,
                                bString: 1,
                                eString: 0,
                            },
                        ],
                    },
                    {
                        type: 'Suspended',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: 3,
                                dString: 3,
                                gString: 0,
                                bString: 1,
                                eString: false,
                            },
                        ],
                    },
                    {
                        type: 'Augmented',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: 3,
                                dString: 2,
                                gString: 1,
                                bString: 1,
                                eString: 0,
                            },
                        ],
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
                letter: 'C#',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: 4,
                                dString: 3,
                                gString: 1,
                                bString: 2,
                                eString: 1,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 3,
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
                                gString: 2,
                                bString: 3,
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
                letter: 'D#',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: false,
                                dString: 1,
                                gString: 3,
                                bString: 4,
                                eString: 3,
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
                                dString: 1,
                                gString: 3,
                                bString: 4,
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
                        chords: [],
                    },
                    {
                        type: 'Other',
                        chords: [],
                    },
                ],
            },
            {
                letter: 'E',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 0,
                                EString: 0,
                                aString: 2,
                                dString: 2,
                                gString: 1,
                                bString: 0,
                                eString: 0,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 0,
                                EString: 0,
                                aString: 2,
                                dString: 2,
                                gString: 0,
                                bString: 0,
                                eString: 0,
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
                letter: 'F',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 1,
                                EString: 0,
                                aString: 2,
                                dString: 2,
                                gString: 1,
                                bString: 0,
                                eString: 0,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 1,
                                EString: 0,
                                aString: 2,
                                dString: 2,
                                gString: 0,
                                bString: 0,
                                eString: 0,
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
                letter: 'F#',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 2,
                                EString: 0,
                                aString: 2,
                                dString: 2,
                                gString: 1,
                                bString: 0,
                                eString: 0,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 2,
                                EString: 0,
                                aString: 2,
                                dString: 2,
                                gString: 0,
                                bString: 0,
                                eString: 0,
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
                letter: 'G',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 0,
                                EString: 3,
                                aString: 2,
                                dString: 0,
                                gString: 0,
                                bString: 0,
                                eString: 3,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 3,
                                EString: 0,
                                aString: 2,
                                dString: 2,
                                gString: 0,
                                bString: 0,
                                eString: 0,
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
                letter: 'G#',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: false,
                                dString: 1,
                                gString: 1,
                                bString: 1,
                                eString: 4,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 4,
                                EString: 0,
                                aString: 2,
                                dString: 2,
                                gString: 0,
                                bString: 0,
                                eString: 0,
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
                letter: 'A',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: 0,
                                dString: 2,
                                gString: 2,
                                bString: 2,
                                eString: 0,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 0,
                                EString: false,
                                aString: 0,
                                dString: 2,
                                gString: 2,
                                bString: 1,
                                eString: 0,
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
                letter: 'A#',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 1,
                                EString: false,
                                aString: 0,
                                dString: 2,
                                gString: 2,
                                bString: 2,
                                eString: 0,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 1,
                                EString: false,
                                aString: 0,
                                dString: 2,
                                gString: 2,
                                bString: 1,
                                eString: 0,
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
                letter: 'B',
                chord: [
                    {
                        type: 'Major',
                        chords: [
                            {
                                startFret: 2,
                                EString: false,
                                aString: 0,
                                dString: 2,
                                gString: 2,
                                bString: 2,
                                eString: 0,
                            },
                        ],
                    },
                    {
                        type: 'Minor',
                        chords: [
                            {
                                startFret: 2,
                                EString: false,
                                aString: 0,
                                dString: 2,
                                gString: 2,
                                bString: 1,
                                eString: 0,
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
        ],
    },
    createChordsPage: {
        startFret: 0,
        EString: 0,
        aString: 0,
        dString: 0,
        gString: 0,
        bString: 0,
        eString: 0,
    },
}
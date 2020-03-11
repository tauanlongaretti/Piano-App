import React, { Component } from "react";
import PianoKeys from "./Images/PianoKeys.png";
import A from "./audio/A.wav";
import Asharp from "./audio/Asharp.ogg";
import B from "./audio/B.m4a";
import C from "./audio/C.m4a";
import Csharp from "./audio/Csharp.mp3";
import D from "./audio/D.m4a";
import Dsharp from "./audio/Dsharp.ogg";
import E from "./audio/E.m4a";
import F from "./audio/F.m4a";
import Fsharp from "./audio/Fsharp.ogg";
import G from "./audio/G.m4a";
import Gsharp from "./audio/Gsharp.mp3";
import { Howl, Howler } from "howler";

const pianoSounds = [
    { sound: A,label: 'A' },
    { sound: Asharp, label: 'A#' },
    { sound: B, label: 'B' },
    { sound: C, label: 'C' },
    { sound: Csharp, label: 'C#' },
    { sound: D, label: 'D' },
    { sound: Dsharp, label: 'D#' },
    { sound: E, label: 'E' },
    { sound: F, label: 'F' },
    { sound: Fsharp, label: 'F#' },
    { sound: G, label: 'G' },
    { sound: Gsharp, label: 'G#' }
]

class Piano extends Component {

    SoundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }

    RenderButtons = () => {
        return pianoSounds.map(( soundObj, index ) => {
            return (
                <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
                    {soundObj.label}
                </button>
            )
        })
    }

    render() {
        Howler.volume(1.0)
    return (
        <div>
            <img className="piano-pic" src={PianoKeys} alt="piano keys"/>
            {this.RenderButtons()}
        </div>
    )
    }
}

export default Piano;
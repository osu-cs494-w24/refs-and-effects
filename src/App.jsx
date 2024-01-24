import { useState } from 'react'

import VideoPlayer from './VideoPlayer'

import kittiesVideo from './assets/kitties.mp4'

import './App.css'

export default function PhotosApp() {
    const [ videoIsPlaying, setVideoIsPlaying ] = useState(false)
    return (
        <>
            <nav>
                <button>
                    Go to first cat
                </button>
                <button>
                    Go to second cat
                </button>
                <button>
                    Go to third cat
                </button>
                <button>
                    Go to cat video
                </button>
            </nav>
            <main>
                <div>
                    <img src="http://placekitten.com/480/480?image=1" />
                </div>
                <div>
                    <img src="http://placekitten.com/480/480?image=2" />
                </div>
                <div>
                    <img src="http://placekitten.com/480/480?image=3" />
                </div>
                <div>
                    <VideoPlayer src={kittiesVideo} />
                    <div>
                        <button onClick={() => setVideoIsPlaying(prev => !prev)}>
                            {videoIsPlaying ? "⏸️" : "▶️"}
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

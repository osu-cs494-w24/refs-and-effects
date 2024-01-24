import { useState, useRef } from 'react'

import VideoPlayer from './VideoPlayer'

import kittiesVideo from './assets/kitties.mp4'

import './App.css'

export default function PhotosApp() {
    const [ videoIsPlaying, setVideoIsPlaying ] = useState(false)
    const counterRef = useRef(0)
    const firstCatRef = useRef(null)
    const secondCatRef = useRef(null)
    const thirdCatRef = useRef(null)

    function scrollToRef(ref) {
        ref.current.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "smooth"
        })
    }

    return (
        <>
            <nav>
                <button onClick={() => scrollToRef(firstCatRef)}>
                    Go to first cat
                </button>
                <button onClick={() => scrollToRef(secondCatRef)}>
                    Go to second cat
                </button>
                <button onClick={() => scrollToRef(thirdCatRef)}>
                    Go to third cat
                </button>
                <button>
                    Go to cat video
                </button>
            </nav>
            <main>
                <p>counterRef value: {counterRef.current}</p>
                <button onClick={() => {
                    counterRef.current += 1
                    console.log("== counterRef.current:", counterRef.current)
                }}>Update counter</button>
                <button onClick={() => {
                    const width = firstCatRef.current.offsetWidth
                    const height = firstCatRef.current.offsetHeight
                    console.log(`== Dimensions of the cat are ${width} x ${height}px`)
                }}>Measure first cat</button>
                <div ref={firstCatRef}>
                    <img src="http://placekitten.com/480/480?image=1" />
                </div>
                <div ref={secondCatRef}>
                    <img src="http://placekitten.com/480/480?image=2" />
                </div>
                <div ref={thirdCatRef}>
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

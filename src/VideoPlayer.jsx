import { useRef, useEffect, useState } from 'react'

export default function VideoPlayer(props) {
    const { src, isPlaying } = props
    const ref = useRef(null)
    const [ counter, setCounter ] = useState(0)

    // Don't do this!
    // useEffect(() => {
    //     setCounter(counter + 1)
    // })

    // useEffect(() => {
    //     const connection = createChatConnection()
    //     connection.connect()
    //     return () => connection.disconnect()
    // }, [])

    useEffect(() => {
        console.log("== This effect will only be executed at mount")
    }, [])

    useEffect(() => {
        function handleWindowClick(e) {
            const bounds = ref.current.getBoundingClientRect()
            if (e.clientX < bounds.left
                || e.clientX > bounds.right
                || e.clientY < bounds.top
                || e.clientY > bounds.bottom
            ) {
                console.log("== User clicked outside video player")
            }
        }
        window.addEventListener("click", handleWindowClick)
        return () => window.removeEventListener("click", handleWindowClick)
    }, [])

    useEffect(() => {
        if (isPlaying) {
            console.log("== Video is playing")
            ref.current.play()
        } else {
            console.log("== Video is paused")
            ref.current.pause()
        }
    }, [ isPlaying ])
    return <video ref={ref} src={src} loop playsInline />
}

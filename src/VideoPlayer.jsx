export default function VideoPlayer(props) {
    const { src, isPlaying } = props
    return <video src={src} loop playsInline />
}

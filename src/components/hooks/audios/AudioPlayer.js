import React from "react"
import { useAudioPosition } from "react-use-audio-player"
 
const PlayBar = () => {
    const { position, duration } = useAudioPosition({ highRefreshRate: true })
    const [percent, setPercent] = React.useState(0)
 
    React.useEffect(() => {
        setPercent((position / duration) * 100 || 0)
    }, [position, duration])
 
    return <ProgressBar percentComplete={percent} />
}

export default PlayBar
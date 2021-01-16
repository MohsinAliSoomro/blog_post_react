import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
function Video() {
    const [ videos, setVideos ] = useState([]);
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			fetch('https://www.spatialardhi.com/estate/videos//?format=json').then((res) => res.json()).then((data) => {
				if (data) {
					setVideos(data);
				}
			});
		}
		return () => {
			mounted = false;
		};
    }, []);
    console.log(videos)
    return (
        <div>
            {videos.map(video => {
                return (
                    <div key={video.id}>
                        <ReactPlayer width="100%"  controls={true} url={video.video} onError={()=><div>Error </div>} />
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Video

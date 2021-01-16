import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
function Video() {
	const [ videos, setVideos ] = useState([]);
	const [ loadMore, setLoadMore ] = useState(3);
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

	return (
        <div style={{ textAlign:'center'}}>
			{videos.map((video) => {
				return (
					<div key={video.id}>
						<ReactPlayer width="100%" controls={true} url={video.video} onError={() => <div>Error </div>} />
						<hr />
					</div>
				);
			}).slice(0,loadMore)}
            <button
                onClick={()=>setLoadMore(loadMore+3)}
				style={{
                    backgroundColor: 'white',
                    
					border: '0px',
					borderRadius: '3px',
					margin: '5px'
				}}
			>
				Load more
			</button>
		</div>
	);
}

export default Video;

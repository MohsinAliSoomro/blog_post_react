import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/post';
// import Video from './components/video';
// import axios from 'axios';
// import { fetch } from 'whatwg-fetch';
function App() {
	const [ posts, setPosts ] = useState([]);
	// const [ loadMore, setLoadMore ] = useState(1);
	useEffect(() => {
		async function GetData() {
			const json = await fetch('https://www.spatialardhi.com/estate/posts/?format=json');
			const data =await json.json();
			setPosts(data)
		}
		// fetch('https://www.spatialardhi.com/estate/posts/?format=json').then((res) => res.json()).then((data) => {
		// 	if (data) {
		// 		console.log(data);
		// 		setPosts(data);
		// 	}
		// });
		GetData();
	}, []);
	return (
		<div className="container" style={{ backgroundColor: 'magenta' }}>
			<h2 style={{ color: 'cyan' }}>Blog Posts</h2>
			<hr />
			<div className="row">
				<div className="col">
					{posts.map((post) => {
						return <Post post={post} key={post.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;

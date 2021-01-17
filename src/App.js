import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/post';
// import Video from './components/video';
// import axios from 'axios';
// import { fetch } from 'whatwg-fetch';
function App() {
	const [ posts, setPosts ] = useState({loading:true,Data:[]});
	// const [ loadMore, setLoadMore ] = useState(1);
	useEffect(() => {
		setPosts({loading:true,Data:[]})
		async function GetData() {
			const json = await fetch('http://www.spatialardhi.com/estate/posts/?format=json', {
				method: 'GET'
			});
			const data = await json.json();
			setPosts({loading:false,Data:data});
		}
		// fetch('https://www.spatialardhi.com/estate/posts/?format=json').then((res) => res.json()).then((data) => {
		// 	if (data) {
		// 		console.log(data);
		// 		setPosts(data);
		// 	}
		// });
		GetData();
	}, []);
	if (posts.loading) {
		return (<div>Loading...</div>)
	}
	return (
		<div className="container" style={{ backgroundColor: 'magenta' }}>
			<h2 style={{ color: 'cyan' }}>Blog Posts</h2>
			<hr />
			<div className="row">
				<div className="col">
					{posts.Data.map((post) => {
						return <Post post={post} key={post.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;

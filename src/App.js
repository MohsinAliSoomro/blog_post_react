import React,{useState,useEffect} from 'react';
import './App.css';
import Post from './components/post';
// import Video from './components/video';

function App() {
	const [ posts, setPosts ] = useState([]);
	// const [ loadMore, setLoadMore ] = useState(1);
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			fetch('https://www.spatialardhi.com/estate/posts/?format=json').then((res) => res.json()).then((data) => {
				
					setPosts(data);
				
			});
		}
		return () => {
			mounted = false;
		};
	}, []);
	return (
		<div className="container" style={{ backgroundColor: 'magenta' }}>
			<h2 style={{ color: 'cyan' }}>Blog Posts</h2>
			<hr />
			<div className="row">
				<div className="col">
					{posts.map(post => {
						return (
							<Post post={post} key={post.id}  />
						)
					})}
					
					
				</div>
			</div>
		</div>
	);
}

export default App;

import React, { useEffect, useState } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import './style.css';
import Comments from '../comments';
function Post() {
	const [ post, setPost ] = useState({});
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			fetch('https://www.spatialardhi.com/estate/posts/?format=json').then((res) => res.json()).then((data) => {
				if (data) {
					setPost(data[0]);
				}
			});
		}
		return () => {
			mounted = false;
		};
	}, []);
	if (!post) {
		return <div>Something Errors</div>;
	}
	
	return (
		<div className="blog-container">
			<img style={{border:"1px solid white",borderRadius:'4px'}} width="100%" src={post.thumbnail} alt={post.thumbnail} />
			<div style={{ display: 'flex' }}>
				<h3>{post.title} </h3>
				<p style={{ marginTop: '10px', marginLeft: '10px' }}>
					<AiOutlineFieldTime size={16} />
					<span style={{ fontSize: '16px' }}>{post.date_published}</span>
				</p>
			</div>

			<p style={{ fontSize: '20px',backgroundColor:'magenta',padding:'5px',borderRadius:'5px'}}>{post.content}</p>
			<Comments id={post.id} />
		</div>
	);
}

export default Post;

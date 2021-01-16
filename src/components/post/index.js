import React, { useEffect, useState } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import './style.css';
import Comments from '../comments';
function Post() {
	const [ posts, setPosts ] = useState([]);
	const [ loadMore, setLoadMore ] = useState(3);
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			fetch('https://www.spatialardhi.com/estate/posts/?format=json').then((res) => res.json()).then((data) => {
				if (data) {
					setPosts(data);
				}
			});
		}
		return () => {
			mounted = false;
		};
	}, []);
	if (!posts) {
		return <div>Loading</div>;
	}

	return (
		<div className="blog-container">
			{posts
				.map((post) => {
					return (
						<div>
							<img
								style={{ border: '1px solid white', borderRadius: '4px' }}
								width="100%"
								src={post.thumbnail}
								alt={post.thumbnail}
							/>
							<div style={{ display: 'flex' }}>
								<h3>{post.title} </h3>
								<p style={{ marginTop: '10px', marginLeft: '10px' }}>
									<AiOutlineFieldTime size={16} />
									<span style={{ fontSize: '16px' }}>{post.date_published}</span>
								</p>
							</div>

							<p
								style={{
									fontSize: '20px',
									backgroundColor: 'magenta',
									padding: '5px',
									borderRadius: '5px'
								}}
							>
								{post.content}
							</p>
							<Comments id={post.id} />
						</div>
					);
				})
				.slice(0, loadMore)}

			<div style={{ textAlign: 'center' }}>
				<button
					onClick={() => setLoadMore(loadMore + 3)}
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
		</div>
	);
}

export default Post;

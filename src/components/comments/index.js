import React, { useEffect, useState } from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import './style.css';
function Comments({ id }) {
	const [ comments, setComments ] = useState([]);
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			fetch('https://www.spatialardhi.com/estate/comments/?format=json')
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						const filterComment = data.filter((c) => c.post === id);
						setComments(filterComment);
					}
				});
		}
	}, [id]);
	if (comments.length === 0 && comments === undefined) {
		return <div>Loading Comments</div>;
	}
	console.log(comments)
	return (
		<div>
			<h2>Comments</h2>
			{comments.map((comment) => {
				return (
					<div key={comment.id} className="panel panel-default">
						<div className="panel-body">
							<section className="post-heading">
								<div className="row">
									<div className="col-md-11">
										<div className="media">
											<div className="media-left">
												<AiOutlineComment size={50} />
											</div>
											<div className="media-body">
												<p className="anchor-time">{comment.date_published}</p>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section className="post-body">
								<p>{comment.content}</p>
							</section>
						</div>
						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default Comments;

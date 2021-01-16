import React, { useState, useEffect } from 'react';
import { BsReply } from 'react-icons/bs';
function Replies({ id }) {
	const [ replies, setReplies ] = useState([]);
	useEffect(
		() => {
			let mounted = true;
			if (mounted) {
				fetch('https://www.spatialardhi.com/estate/replies/?format=json')
					.then((res) => res.json())
					.then((data) => {
						if (data) {
							const filterReplies = data.filter((r) => r.comment === id);
							setReplies(filterReplies);
						}
					});
			}
		},
		[ id ]
	);

	return (
		<div style={{ marginLeft: '20px' }}>
			<p>Reply</p>
			{replies.map((reply) => {
				return (
					<div style={{backgroundColor:'magenta',padding:'4px',borderRadius:'4px' }} key={reply.id}>
						<BsReply />
						{reply.content}
					</div>
				);
			})}
		</div>
	);
}

export default Replies;

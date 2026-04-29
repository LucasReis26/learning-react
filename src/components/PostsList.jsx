import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal.jsx';
import { useState } from 'react';
import style from './PostsList.module.css';

function PostsLists({isPosting,onStopPosting}){
	const [posts,setPosts] = useState([]);

	function addNewHandler(postData){
		setPosts((existingPosts) => [postData, ...existingPosts]);
	}

	return(
		<>
			{ isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onNewPost={addNewHandler}/>
				</Modal>
			)}
			{ posts.length > 0 && (
				<ul className={style.posts}>
					{posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
				</ul>
			)}
			{ posts.length === 0 && (
				<div style={{textAlign: 'center', color: 'white'}}>
					<h2>There are no posts yet</h2>
					<p>Starting adding some!</p>
				</div>
			)}
		</>
	);
}
export default PostsLists;

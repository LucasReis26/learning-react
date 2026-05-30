import { useState, useEffect } from 'react';
import style from './PostsList.module.css';

import Post from './Post';

function PostsLists(){
	const [posts,setPosts] = useState([]);
	const [isFetching,setIsFetching] = useState(false);
	useEffect(()=>{
		async function fetchPosts(){
			setIsFetching(true);
			const response = await fetch('http://localhost:8080/posts');
			const resData = await response.json();
			setPosts(resData.posts);
			setIsFetching(false);
		}
		fetchPosts();
	}, []);

	function addNewHandler(postData){
		fetch('http://localhost:8080/posts',{
			method: 'POST',
			body: JSON.stringify(postData),
			headers:{
				'Content-Type': 'application/json'
			}
		});
		setPosts((existingPosts) => [postData, ...existingPosts]);
	}

	return(
		<>
			{ !isFetching && posts.length > 0 && (
				<ul className={style.posts}>
					{posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
				</ul>
			)}
			{ !isFetching && posts.length === 0 && (
				<div style={{textAlign: 'center', color: 'white'}}>
					<h2>There are no posts yet</h2>
					<p>Starting adding some!</p>
				</div>
			)}
			{isFetching && (
				<div style={{textAlign: 'center', color: 'white'}}>
					<p>Loading posts...</p>
				</div> 
			)}
		</>
	);
}
export default PostsLists;

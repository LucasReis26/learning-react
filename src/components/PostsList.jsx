import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal.jsx';
import { useState } from 'react';
import style from './PostsList.module.css';

function PostsLists({isPosting,onStopPosting}){
	const [ enteredBody, setEnteredBody ] = useState('');
	const [ enteredText, setEnteredText ] = useState('');

	function bodyChangeHandler(event){
		setEnteredBody(event.target.value);
	}
	function textChangeHandler(event){
		setEnteredText(event.target.value)
	}

	return(
		<>
			{ isPosting && 
				(
					<Modal onClose={onStopPosting}>
						<NewPost 
							onBodyChange={bodyChangeHandler}
							onCancel={onStopPosting}
							onTextChange={textChangeHandler}
						/>
					</Modal>
				)
			}
			<ul className={style.posts}>
				<Post author={enteredText} body={enteredBody} />
				<Post author="Cleiton" body="Teste" />
			</ul>
		</>
	);
}
export default PostsLists;

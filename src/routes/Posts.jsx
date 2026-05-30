import { useState } from 'react';
import {Outlet} from 'react-router-dom';
import PostsList from '../components/PostsList';
import MainHeader from '../components/MainHeader';

function Posts() {
	
	const [ modalIsVisible, setModalIsVisible ] = useState(false);


	return( 
		<>
			<Outlet/>
			<main>
				<PostsList />
			</main>
		</>
	);
}

export default Posts;

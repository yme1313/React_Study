import HeaderContainer from '../containers/commons/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
	return (
		<>
			<HeaderContainer />
			<PostListContainer />
			<PaginationContainer />
		</>
	)
}

export default PostListPage;
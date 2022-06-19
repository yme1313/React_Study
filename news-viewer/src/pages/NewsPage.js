import { useParams } from 'react-router-dom';
import Categories from '../component/Categories';
import NewList from '../component/NewsList';

const NewsPage = () => {
	const params = useParams();
	const category = params.category || 'all';

	return (
		<>
			<Categories />
			<NewList category={category} />
		</>
	)
}

export default NewsPage;
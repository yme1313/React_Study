import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from 'axios';
import usePromise from "../lib/usePromise";

const NewListBlock = styled.div`
	box-sizing : border-box;
	padding-bottom : 3rem;
	width : 768px;
	margin : 0 auto;
	margin-top : 2rem;
	@media screen and (max-width : 768px) {
		width : 100%;
		padding-left : 1rem;
		padding-right : 1rem;
	}
`;

const NewList = ({ category }) => {
	const [loading, respone, error] = usePromise(() => {
		const query = category === 'all' ? '' : `&category=${category}`;
		return axios.get(
			`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
		);
	}, [category])

	if (loading) {
		return <NewListBlock>대기 중 ...</NewListBlock>
	}
	if (!respone) {
		return null;
	}
	if (error) {
		return <NewListBlock>에러 발생!</NewListBlock>
	}

	const { articles } = respone.data;
	return (
		<NewListBlock>
			{articles.map(article => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewListBlock>
	)
}

export default NewList;
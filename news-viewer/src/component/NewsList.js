import { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from 'axios';

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

const NewList = () => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const respone = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
				);
				setArticles(respone.data.articles)
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		}
		fetchData();
	}, [])

	if (loading) {
		return <NewListBlock>대기 중 ...</NewListBlock>
	}
	if (!articles) {
		return null;
	}

	return (
		<NewListBlock>
			{articles.map(article => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewListBlock>
	)
}

export default NewList;
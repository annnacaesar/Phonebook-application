import {
	Title,
	TitleFirst,
	TitleLast,
	ContainerHome,
} from './Home.styled';

const Home = () => (
	<ContainerHome>
		<Title>
			<TitleFirst>My</TitleFirst>
			<br />
			contacts <br />
			<TitleLast>book</TitleLast>
		</Title>
	</ContainerHome>
);
export default Home;

import {
	Title,
	TitleFirst,
	TitleLast,
	ContainerHome,
	AnimationDiv,
} from './Home.styled';
import { fadeInLeft } from 'react-animations';

const Home = () => (
	<ContainerHome>
		{/* <AnimationDiv> */}
		<Title>
			<TitleFirst>My</TitleFirst>
			<br />
			contacts <br />
			<TitleLast>book</TitleLast>
		</Title>
		{/* </AnimationDiv> */}
	</ContainerHome>
);
export default Home;

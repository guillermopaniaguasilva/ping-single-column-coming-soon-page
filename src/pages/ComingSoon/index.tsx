import { Main, Heading, Bold, SubHeading, Illustration } from './styles';
import BasicLayout from '../../components/BasicLayout';
import NotifyMeForm from './components/NotifyMeForm';

const ComingSoon = () => {
	return (
		<BasicLayout>
			<Main>
				<Heading>
					We are launching
					<Bold> soon!</Bold>
				</Heading>
				<SubHeading>Subscribe and get notified</SubHeading>
				<NotifyMeForm />
				<Illustration src="assets/images/illustration-dashboard.png" />
			</Main>
		</BasicLayout>
	);
};

export default ComingSoon;

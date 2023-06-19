import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Container, SocialNetworks, Circle, Icon, Copyright } from './styles';

const Footer = () => (
	<Container>
		<SocialNetworks>
			<Circle>
				<Icon icon={faFacebookF} />
			</Circle>
			<Circle>
				<Icon icon={faTwitter} />
			</Circle>
			<Circle>
				<Icon icon={faInstagram} />
			</Circle>
		</SocialNetworks>
		<Copyright>© Copyright Ping. All rights reserved.</Copyright>
	</Container>
);

export default Footer;

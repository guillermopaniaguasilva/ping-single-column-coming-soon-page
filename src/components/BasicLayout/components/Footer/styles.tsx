import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.footer`
	min-height: 20vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SocialNetworks = styled.div`
	display: flex;
`;

export const Copyright = styled.p`
	margin-top: 28px;
	margin-bottom: 38px;
	font-size: 10px;
	line-height: 12px;
	font-weight: ${({ theme }) => theme.fontWeights.light}
	font-family: ${({ theme }) => theme.fontFamilies.normal}
	color: ${({ theme }) => theme.colors.gray}
`;

export const Circle = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.borderGray};
	width: 30px;
	height: 30px;
	display: flex;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	margin-right: 12px;
`;

export const Icon = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.colors.blue};
`;

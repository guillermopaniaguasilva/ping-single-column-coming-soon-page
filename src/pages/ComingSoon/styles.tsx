import { styled } from 'styled-components';

export const Main = styled.main`
	min-height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Heading = styled.h1`
	font-family: ${({ theme }) => theme.fontFamilies.normal};
	font-weight: ${({ theme }) => theme.fontWeights.light};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 22px;
	line-height: 32px;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		font-size: 48px;
		line-height: 60px;
	}
`;

export const Bold = styled.span`
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	color: ${({ theme }) => theme.colors.veryDarkBlue};
`;

export const SubHeading = styled.h2`
	font-family: ${({ theme }) => theme.fontFamilies.normal};
	font-weight: ${({ theme }) => theme.fontWeights.light};
	color: ${({ theme }) => theme.colors.veryDarkBlue};
	font-size: 12px;
	line-height: 14px;
	text-align: center;
`;

export const Illustration = styled.img`
	margin: 72px 0 120px 0;
	width: 320px;
	height: 192px;

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		width: 640px;
		height: 358px;
	}
`;

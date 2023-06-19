import { styled } from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.input<{ hasError: boolean }>`
	margin-top: 32px;
	width: 282px;
	height: 40px;
	padding-left: 32px;
	border: 1px solid
		${({ theme, hasError }) =>
			hasError ? theme.colors.lightRed : theme.colors.paleBlue};
	box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.0001);
	border-radius: 28px;

	&::placeholder {
		color: ${({ theme }) => theme.colors.paleBlue};
		font-size: 12px;
		line-height: 20px;
		font-family: ${({ theme }) => theme.fontFamilies.normal};
		font-weight: ${({ theme }) => theme.fontWeights.light};
	}
`;

export const ErrorMessage = styled.p`
	margin-top: 2px;
	color: ${({ theme }) => theme.colors.lightRed};
	font-size: 10px;
	line-height: 20px;
	font-family: ${({ theme }) => theme.fontFamilies.normal};
	font-weight: ${({ theme }) => theme.fontWeights.semi};
`;

export const Submit = styled.button`
	margin-top: 10px;
	width: 100%;
	height: 40px;
	border-radius: 28px;
	border: none;
	box-shadow: 0px 5px 10px 2px rgba(76, 123, 243, 0.230414);
	background-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.white};
	font-size: 12px;
	line-height: 16px;
	font-family: ${({ theme }) => theme.fontFamilies.normal};
	font-weight: ${({ theme }) => theme.fontWeights.semi};
`;

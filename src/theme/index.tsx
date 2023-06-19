import { DefaultTheme } from 'styled-components';
import uiTheme, {
	breakpoints,
	colors,
	fontFamilies,
	fontWeights,
} from './uiTheme';

declare module 'styled-components' {
	export interface DefaultTheme {
		ui: typeof uiTheme;
		breakpoints: {
			mobile: string;
			desktop: string;
		};
		colors: {
			white: string;
			blue: string;
			paleBlue: string;
			lightRed: string;
			gray: string;
			veryDarkBlue: string;
			borderGray: string;
		};
		fontFamilies: {
			normal: string;
		};
		fontWeights: {
			light: number;
			semi: number;
			bold: number;
		};
	}
}

const ui = uiTheme;

const theme: DefaultTheme = {
	ui,
	breakpoints,
	colors,
	fontFamilies,
	fontWeights,
};

export default theme;

import Header from './components/Header';
import Footer from './components/Footer';

type BasicLayoutProps = {
	children: JSX.Element;
};

const BasicLayout = ({ children }: BasicLayoutProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default BasicLayout;

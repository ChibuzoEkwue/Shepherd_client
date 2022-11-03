import { Helmet } from "react-helmet-async";
const Head = ({children}) => {
	return (
		<>
			<Helmet>
				{children}
			</Helmet>
		</>
	);
};

export default Head;

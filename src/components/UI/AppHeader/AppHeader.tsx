import * as React from 'react';
import { Navbar } from 'react-bootstrap';

type AppHeaderProps = {
	name: string;
};

const AppHeader: React.FC<AppHeaderProps> = props => {
	const { name } = props;

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>{name}</Navbar.Brand>
		</Navbar>
	);
};

export default AppHeader;

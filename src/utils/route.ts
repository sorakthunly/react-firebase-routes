import { RouteComponentProps } from 'react-router';

/**
 * @description
 * Provide a resuable callback creator for any router connected component
 * to navigate to a destinational URL.
 *
 * @param {T extends RouteComponentProps} routeComponentProps	React router injected props
 * @param {string} destinationUrl
 */
export const routeTo = <T extends RouteComponentProps>(routeComponentProps: T, destinationUrl: string) => {
	return () => {
		const { history } = routeComponentProps;
		history.push(destinationUrl);
	};
};

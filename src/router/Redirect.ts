import Route, { IRouteProps } from './Route';

import { throwError } from '../shared';

export default class Redirect extends Route<IRouteProps, any> {
	constructor(props, context) {
		super(props, context);
		if ( !props.to ) {
			throwError('Redirect requires a path to redirect to');
		}
	}

	componentWillMount() {
		
	}
}

import { Home } from '../pages';
import { useRoutes } from 'react-router';

const MainRoutes = () => {
	const routes = useRoutes([{ path: '/', element: <Home /> }]);

	return routes;
};

export default MainRoutes;

import {Route, Switch} from 'react-router-dom';
import PortHome from '../../Port-Pages/Port-Home';
import PortProfile from '../../Port-Pages/Port-Profile';

const PortRouter = () => {
    return (
        <Switch>
            <Route exact path={'/Portal'} component={PortHome} />
            <Route exact path={'/Portal/Profile'} component={PortProfile} />
        </Switch>
    );
}

export default PortRouter;
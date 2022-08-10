import {Route, Switch} from 'react-router-dom';
import PortHome from '../../Port-Pages/Port-Home';
import PortProfile from '../../Port-Pages/Port-Profile';
import style from './style.module.scss'

const PortRouter = () => {
    return (
        <div className={style.portRoute}>
        <Switch>
            <Route exact path={'/Portal'} component={PortHome} />
            <Route exact path={'/Portal/Profile'} component={PortProfile} />
        </Switch>
        </div>
    );
}

export default PortRouter;
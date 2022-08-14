import {Route, Switch} from 'react-router-dom';
import DiscussPage from '../../../Pages/Discuss-Page';
import DiscussSingle from '../../../Pages/Discuss-Single';
import DatePage from '../../../Pages/Date-Page';
import PortEntry from '../../Port-Pages/Port-Entry';
import PortHome from '../../Port-Pages/Port-Home';
import PortProfile from '../../Port-Pages/Port-Profile';
import JournalPage from '../../../Pages/Journal-Page';
import style from './style.module.scss'

const PortRouter = () => {
    return (
        <div className={style.portRoute}>
        <Switch>
            <Route exact path={'/Portal'} component={PortHome} />
            <Route exact path={'/Portal/Profile'} component={PortProfile} />
            <Route exact path={'/Portal/Entry'} component={PortEntry} />
            <Route exact path={'/Portal/Discuss'} component={DiscussPage} />
            <Route exact path={'/Portal/Journal'} component={JournalPage} />

            <Route path={'/api/discuss/:id'} component={DiscussSingle} />
            <Route exact path={'/Portal/Dates'} component={DatePage} />            
        </Switch>
        </div>
    );
}

export default PortRouter;
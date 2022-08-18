import {Route, Switch} from 'react-router-dom';

import DatePage from '../../../Pages/Date-Page';
import PortEntry from '../../Port-Pages/Port-Entry';
import PortHome from '../../Port-Pages/Port-Home';
import PortProfile from '../../Port-Pages/Port-Profile';
import PortDiscuss from '../../Port-Pages/Port-Discuss';
import PortDiscussSingle from '../../Port-Pages/Port-Discuss-Single';
import PortJournal from '../../Port-Pages/Port-Journal';
import PortJournalSingle from '../../Port-Pages/Port-Journal-Single';
import style from './style.module.scss';
import { getUsername } from '../../../utils/common';

const username = getUsername();

const PortRouter = () => {
    return (
        <div className={style.portRoute}>
        <Switch>
            <Route exact path={'/Portal'} component={PortHome} />
            <Route exact path={'/Portal/Profile'} component={PortProfile} />
            <Route exact path={'/Portal/Entry'} component={PortEntry} />
            <Route exact path={'/Portal/Discuss'} component={PortDiscuss} />
            <Route exact path={'/Portal/Journal'} component={PortJournal} />
            <Route exact path={`/portal/${username}/api/journals/:id`} component={PortJournalSingle} />  
            <Route path={'/portal/api/discuss/:id'} component={PortDiscussSingle}/>
            <Route exact path={'/Portal/Dates'} component={DatePage} />            
        </Switch>
        </div>
    );
}

export default PortRouter;
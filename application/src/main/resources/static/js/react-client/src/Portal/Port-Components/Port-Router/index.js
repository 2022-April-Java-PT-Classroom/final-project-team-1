import {Route, Switch} from 'react-router-dom';
import PortAdmin from '../../Port-Pages/Port-Admin';
import PortEntry from '../../Port-Pages/Port-Entry';
import PortHome from '../../Port-Pages/Port-Home';
import PortProfile from '../../Port-Pages/Port-Profile';
import PortDate from '../../Port-Pages/Port-Date';
import PortDiscuss from '../../Port-Pages/Port-Discuss';
import PortDiscussSingle from '../../Port-Pages/Port-Discuss-Single';
import PortJournal from '../../Port-Pages/Port-Journal';
import PortJournalSingle from '../../Port-Pages/Port-Journal-Single';
import PortPrompt from '../../Port-Pages/Port-Prompt';
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
            <Route exact path={'/Portal/Prompt'} component={PortPrompt} />
            <Route exact path={'/Portal/Dates'} component={PortDate} />
            <Route exact path={'/Portal/Discuss'} component={PortDiscuss} />
            <Route exact path={'/Portal/Journal'} component={PortJournal} />
            <Route exact path={'/Portal/Admin'} component={PortAdmin} />
            <Route exact path={`/portal/${username}/api/journals/:id`} component={PortJournalSingle} />  
            <Route path={'/portal/api/discuss/:id'} component={PortDiscussSingle}/>
        </Switch>
        </div>
    );
}

export default PortRouter;
import {Route, Switch} from 'react-router-dom';

import DatePage from '../../../Pages/Date-Page';
import DiscussPage from '../../../Pages/Discuss-Page';
import DiscussSingle from '../../../Pages/Discuss-Single';
import JournalPage from '../../../Pages/Journal-Page';
import PortEntry from '../../Port-Pages/Port-Entry';
import PortHome from '../../Port-Pages/Port-Home';
import PortProfile from '../../Port-Pages/Port-Profile';
import PortDiscuss from '../../Port-Pages/Port-Discuss';
import PortDiscussSingle from '../../Port-Pages/Port-Discuss/Port-Discuss-Single';
import SingleJournalEntryPage from "../../../Components/singleJournalEntry";
import style from './style.module.scss';

const PortRouter = () => {
    return (
        <div className={style.portRoute}>
        <Switch>
            <Route exact path={'/Portal'} component={PortHome} />
            <Route exact path={'/Portal/Profile'} component={PortProfile} />
            <Route exact path={'/Portal/Entry'} component={PortEntry} />
            <Route exact path={'/Portal/Discuss'} component={PortDiscuss} />
            <Route exact path={'/Portal/Journal'} component={JournalPage} />
            <Route exact path={'/Journal-Page/:id'} component={SingleJournalEntryPage} />  
            <Route path ={'/portal/api/discuss/:id'} component={PortDiscussSingle}/>
            <Route path={'/api/discuss/:id'} component={DiscussSingle} />
            <Route exact path={'/Portal/Dates'} component={DatePage} />            
        </Switch>
        </div>
    );
}

export default PortRouter;
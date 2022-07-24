import {Route, Switch} from 'react-router-dom';
import DatePage from '../../Pages/Date-Page';
import DiscussPage from '../../Pages/Discuss-Page';
import HomePage from '../../Pages/Home-Page';
import PromptPage from '../../Pages/Prompt-Page';
import AboutUsPage from '../../Pages/AboutUs-Page';
import JournalPage from '../../Pages/Journal-Page';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/Date-Page'} component={DatePage} />
            <Route exact path={'/Discuss-Page'} component={DiscussPage} />
            <Route exact path={'/Home-Page'} component={HomePage} />
            <Route exact path={'/Prompt-Page'} component={PromptPage} />
            <Route exact path={'/AboutUs-Page'} component={AboutUsPage} />
            <Route exact path={'/Journal-Page'} component={JournalPage} />
        </Switch>
    )
}

export default AppRouter;
import {Routes, Route, Switch} from 'react-router-dom';
import DatePage from '../../Pages/Date-Page';
import DiscussPage from '../../Pages/Discuss-Page';
import DiscussSingle from '../../Pages/Discuss-Single';
import HomePage from '../../Pages/Home-Page';
import PromptPage from '../../Pages/Prompt-Page';
import AboutUsPage from '../../Pages/AboutUs-Page';
import Contact from '../../Pages/Contact';
import JournalPage from '../../Pages/Journal-Page';
import LoginPage from '../../Pages/Login-Page';
import SignUpPage from '../../Pages/Signup-Page';
import Resources from '../../Pages/Resources';
import LoveLanguages from '../../Pages/Love';
import Quotes from '../../Pages/Quotes';
import FormSubmission from '../../Pages/Date-Page/FormSubmission';

const AppRouter = () => {

    return (
        <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/Discuss-Page'} component={DiscussPage} />
            <Route exact path={'/Prompt-Page'} component={PromptPage} />
            <Route exact path={'/AboutUs-Page'} component={AboutUsPage} />
            <Route exact path={'/Contact'} component={Contact}/>
            <Route exact path={'/Journal-Page'} component={JournalPage} />
            <Route exact path={'/Login'} component={LoginPage} />
            <Route exact path={'/Signup'} component={SignUpPage} />
            <Route exact path={'/Resources'} component={Resources} />
            <Route exact path={'/Love-page'} component={LoveLanguages}/>
            <Route exact path={'/Quotes'} component={Quotes} />
            <Route path={'/Date-Page'} component={DatePage} />
            <Route path={'/add-DateNight'} component={FormSubmission} />
            <Route path={'/api/discuss/:id'} component={DiscussSingle} />
        </Switch>
    );
}

export default AppRouter;
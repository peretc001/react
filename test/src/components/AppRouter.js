import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "./layout/Header";
import Remember from "../pages/Remember";
import SendLogin from "../pages/SendLogin";
import Confirm from "../pages/Confirm";
import SendEmail from "../pages/SendEmail";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Header/>

                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/remember" component={Remember}/>
                    <Route exact path="/send-login" component={SendLogin}/>
                    <Route exact path="/confirm" component={Confirm}/>
                    <Route exact path="/send-email" component={SendEmail}/>
                </Switch>
            </Router>
        </div>
    );
};

export default AppRouter;

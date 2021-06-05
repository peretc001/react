import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "./layout/Header";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Header/>

                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                </Switch>
            </Router>
        </div>
    );
};

export default AppRouter;

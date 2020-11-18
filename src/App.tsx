import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "components/layout/Nav";
import UserProfile from "components/UserProfile";
import Feed from "components/Feed";
// import Contacts from "components/Contacts";

const App: React.FC<{}> = () => {
    return (
        <div className="font-body bg-grayMain">
            <Router>
                <Nav />
                <div className="grid grid-cols-4 gap-4 h-body">
                    <UserProfile />
                    <Switch>
                        <Route path="/activity" component={Feed} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;

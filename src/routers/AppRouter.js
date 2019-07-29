import React, { PureComponent } from 'react';
import  NavBar from "../components/NavBar";
class AppRouter extends PureComponent {
    render() {
        return (
            <div id='App'>
                <NavBar></NavBar>
            </div>
        )
    }
}

export default AppRouter;
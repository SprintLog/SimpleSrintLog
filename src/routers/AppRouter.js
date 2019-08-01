import React, { PureComponent } from 'react';
import  NavBar from "../containers/NavBar";
import FormStrap from "../containers/FormStrap";
import withSection from '../hocs/withSection'

const NameFormSection = withSection(FormStrap);
class AppRouter extends PureComponent {
    render() {
        return (
            <div id='App'>
                <NavBar />
              <FormStrap/>
            </div>
        )
    }
}

export default AppRouter;
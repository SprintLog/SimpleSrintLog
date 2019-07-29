import React, { PureComponent } from 'react';
import  NavBar from "../containers/NavBar";
import NameForm from "../containers/NameForm";
import withScrollSpy from '../hocs/withScrollSpy'
import withSection from '../hocs/withSection'

const NameFormSection = withSection(NameForm);
class AppRouter extends PureComponent {
    render() {
        return (
            <div id='App'>
                <NavBar />
              <NameFormSection  key='personal' title='Personal Information' icon='user-circle-o'/>
            </div>
        )
    }
}

export default AppRouter;
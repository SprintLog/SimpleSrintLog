import React, {PureComponent} from 'react';
import NavBar from "../containers/NavBar";
import FormStrap from "../containers/FormStrap";
import withSection from '../hocs/withSection'
import {Container, Row, Col} from 'reactstrap'

const NameFormSection = withSection(FormStrap);
class AppRouter extends PureComponent {
    render() {
        return (
            <div id='App'>
                <Container>
                    <NavBar/>

                    <NameFormSection title='Simple'/>
                    <NameFormSection title='Average'/>
                    <NameFormSection title='Complex'/>

                </Container>
            </div>
        )
    }
}

export default AppRouter;
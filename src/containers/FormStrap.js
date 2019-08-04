import React, {PureComponent} from 'react';
import {FormGroup, Label, Input, Row, Col} from 'reactstrap';
import ButtonStrap from '../components/ButtonStrap';
class FormStrap extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="4">
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="email"
                                    value={this.state.value}
                                    onChange={this.handleChange}/>
                            </FormGroup>
                       
                        </form>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default FormStrap
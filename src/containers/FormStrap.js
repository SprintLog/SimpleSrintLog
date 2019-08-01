import React, {PureComponent} from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
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
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="">TYEST</Label>
                        <Input
                            type="text"
                            name="email"
                            value={this.state.value}
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <ButtonStrap name="click"/>
                </form>
            </React.Fragment>
        );
    }
}

export default FormStrap
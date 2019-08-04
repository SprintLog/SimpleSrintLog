import React from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Label
} from 'reactstrap'
const Wrapper = styled.div `
  margin-top: 40px;
`

const withSection = (Component) => {
    const Section = ({title}) => (
        <Wrapper>
            <Card>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <Component />
                </CardBody>
            </Card>
        </Wrapper>
    )
    return Section
}

export default withSection
import './About.css';

import { connect } from 'react-redux';
import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'

import ContactForm from './components/ContactForm/ContactForm'
import UserCard from 'components/UserCard/UserCard'
import { submitForm } from 'ducks/ContactForm.duck.js'

function About(props) {
    const { formSubmit, contactForm } = props;
    const { isLoading, wasSentSuccessfully } = contactForm
    const handleSubmit = (values) => formSubmit(values);

    return (
        <section className='about-section'>
            <Grid stackable container centered >
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <UserCard/>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row>
                            <Segment color='blue' raised>
                                <p>Jordan Rosenberg is a recent university graduate with a B.S. in Computer Science (Technical concentration).</p>
                                <p>Jordan is innovative, simplistic, and ambitious. He believes that any task is attainable with hard work and dedication.</p>
                                <p>During the course of his collegiate career, Jordan has developed a passion for building professional relationships and making a difference in the community.</p>
                                <p>Jordan is building on his personal and professional skills to become a valuable asset in the tech. industry.</p>
                            </Segment>
                        </Grid.Row>
                        <Grid.Row>
                            <Segment
                                color={isLoading ? 'orange' : 'blue'}
                                raised
                                stacked
                            >
                                <ContactForm
                                    loading={isLoading}
                                    wasSentSuccessfully={wasSentSuccessfully}
                                    onSubmit={handleSubmit}
                                />
                            </Segment>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        contactForm: state.contactForm
    };
}

function mapDispatchToProps(dispatch) {
    return {
        formSubmit: (formData) => dispatch(submitForm(formData)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);

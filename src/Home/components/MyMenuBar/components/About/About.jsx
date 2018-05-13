import './About.css';

import { connect } from 'react-redux';
import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'

import ContactForm from './components/ContactForm/ContactForm'
import UserCard from 'components/UserCard/UserCard'
import { submitForm } from 'ducks/ContactForm.duck.js'

function About(props) {
    const { formSubmit, contactForm } = props;
    const { isLoading, wasSentSuccessfully } = contactForm;
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
                            <Segment raised>
                                <h3 className='text-center'>Introduction</h3>
                                <p>I’m a recent university graduate with a B.S. in Computer Science.</p>
                                <p>If I were to describe myself using three words, they would be innovative, simplistic, and ambitious.</p>
                                <p>I believe that any task is attainable with hard work and dedication. During the course of my collegiate career, I’ve developed a passion for building professional relationships and making a difference in the community.</p>
                            </Segment>
                        </Grid.Row>
                        <Grid.Row>
                            <Segment
                                color={isLoading ? 'orange' : undefined }
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

import { connect } from 'react-redux';
import { Button, Modal, Icon, Transition } from 'semantic-ui-react'
import React from 'react';

import { closeExternalLinkModal } from 'ducks/ExternalLinkModal.duck.js';

function ExternalLinkModal(props) {
    const { closeModal, isOpen, url } = props

    return (
        <Transition
            animation={'fade down'}
            visible={isOpen}
            duration={250}
        >
            <Modal
                dimmer='blurring'
                size='small'
                open={isOpen}
                onClose={closeModal}
            >
                <Modal.Header>
                    <Icon name='warning sign'/>
                    You are about to leave Joroze.com
                </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to proceed to the following website?</p>
                    <small>{url}</small>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color='grey'
                        onClick={closeModal}
                        content='Cancel'
                    />
                    <Button
                        positive
                        icon='arrow circle right'
                        labelPosition='right'
                        content='Proceed'
                        onClick={closeModal}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </Modal.Actions>
            </Modal>
        </Transition>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(closeExternalLinkModal())
    };
}

function mapStateToProps(state) {
    return {
        isOpen: state.externalLinkModal.isModalOpen,
        url: state.externalLinkModal.url
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExternalLinkModal);

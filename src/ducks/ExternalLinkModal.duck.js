import * as R from 'ramda'

import { Action } from 'utilities.js';

export const OPEN_EXTERNAL_LINK_MODAL = 'ExternalLinkModal/OPEN_EXTERNAL_LINK_MODAL';
export const CLOSE_EXTERNAL_LINK_MODAL = 'ExternalLinkModal/CLOSE_EXTERNAL_LINK_MODAL';

// Action Creators
export const closeExternalLinkModal = () => Action(CLOSE_EXTERNAL_LINK_MODAL);
export const openExternalLinkModal = (url) => Action(OPEN_EXTERNAL_LINK_MODAL, url);

// Define the initial state for the reducer
export const initialState = {
    isModalOpen: false,
    url: ''
}

// Global Alert Reducer
export function reducer(state = initialState, action) {
    const mergeToState = R.merge(state)

    switch (action.type) {
        case CLOSE_EXTERNAL_LINK_MODAL:
            return mergeToState({
                isModalOpen: false
            });
        case OPEN_EXTERNAL_LINK_MODAL:
            return mergeToState({
                isModalOpen: true,
                url: action.payload
            });
        default:
            return state;
    }
}

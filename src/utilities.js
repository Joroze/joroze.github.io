import R from 'ramda'

export function Action(type, payload) {
    return {
        type: type,
        payload: payload
    }
}

export function ErrorAction(type, payload) {
    return {
        type: type,
        payload: payload,
        error: true
    }
}

export function ajaxErrorMessage(error) {
    const generalErrorMessage = 'Services cannot be reached at this time.';
    return R.path(['xhr', 'response', 'message'])(error) || generalErrorMessage;
}
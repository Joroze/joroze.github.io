// Define the initial state for the reducer
var initialState={
  repos: []
}

export default function(state=initialState, action) {
    switch (action.type) {
        case "projects/AJAX_LOADING":
            return action.payload;
        case "projects/AJAX_SUCCESS":
            return action.payload;
        case "projects/AJAX_FAIL":
            return action.payload;
        default:
            return state;
    }
}

// Define the initial state for the reducer
var initialState={
  data: []
}

export default function(state=initialState, action) {
    switch (action.type) {
        case "userprofile/AJAX_LOADING":
            return action.payload;
        case "userprofile/AJAX_SUCCESS":
            return action.payload;
        case "userprofile/AJAX_FAIL":
            return action.payload;
        default:
            return state;
    }
}

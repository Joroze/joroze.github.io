// Action Creator function

// export const ajaxLoading = (repos) => {
//     console.log("AJAX Loading");
//     return {
//         type: "AJAX_LOADING",
//         payload: {
//             repos: {},
//             loading: true,
//             loadingColor: 'orange'
//         }
//     }
// }
//
// export const ajaxFetch = (repos) => {
//     console.log("AJAX Fetch");
//     return {
//         type: "AJAX_FETCH",
//         payload: {
//             repos: repos,
//             loading: true,
//             loadingColor: 'orange'
//         }
//     }
// }
//
//
// export const ajaxSuccess = (repos) => {
//     console.log("AJAX Successful");
//
//
//     return {
//         type: "AJAX_SUCCESS",
//         payload: {
//             repos: repos,
//             loading: false,
//             loadingColor: 'blue'
//         }
//     }
// }
//
// export const ajaxFail = () => {
//     console.log("AJAX Failed");
//     return {
//         type: "AJAX_FAIL",
//         payload: {
//             repos: {},
//             loading: false,
//             loadingColor: 'red',
//             errorMsg: "GitHub cannot be reached."
//         }
//     }
// }

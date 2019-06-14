import { LOADING_COMPLETE } from "../actions/loading";

const loading = (state = false, action) => {
    switch (action.type) {
        case LOADING_COMPLETE:
            return action.loaded
        default:
            return state;
    }
}

export default loading;
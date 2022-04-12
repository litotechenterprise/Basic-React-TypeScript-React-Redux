import {Action} from "../actions";
import {ActionType} from "../action-types";

interface RepositoryState {
    loading: boolean;
    error: string | null;
    data: string[];
}


const initalState = {
    loading: true,
    error: null, 
    data:[]
}

const reducer = (
        state: RepositoryState = initalState, 
        action: Action 
    ): RepositoryState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error:null, data:[]};
        case ActionType.SEARCH_REPOSITORIER_SUCCESS:
            return {loading: false, error:null, data: action.payload};
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading:false, error:action.payload, data:[]};
        default:
            return state;
    }
};


export default reducer;
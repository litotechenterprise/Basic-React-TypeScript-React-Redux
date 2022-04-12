import {ActionType} from "../action-types"

interface SearchRepositoriresAction {
    type:ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIER_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesFailureAction {
    type:ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action =  
        | SearchRepositoriresAction
        | SearchRepositoriesSuccessAction
        | SearchRepositoriesFailureAction;
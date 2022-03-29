import { defaultMaxListeners } from "events"

interface RepositoryState {
    loading: boolean,
    error: string | null,
    data: string[]
}



const reducer = (state: RepositoryState, action: any) => {
    switch (action.type) {
        case "search_repositories":
        case "search_repositories_success":
        case "search_repostories_error":


        default:
            return state;
    }
};


export default reducer
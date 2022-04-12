import {useState} from "react"
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";

const RepositoriesList : React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepository} = useActions();
    const {data, error, loading} = useTypedSelector((state) => state.repositories);
    console.log(data)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepository(term);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>

            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map((name) => <div>{name}</div>)}
        </div>
    )
}


export default RepositoriesList;
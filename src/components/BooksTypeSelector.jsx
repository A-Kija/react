import { useContext } from "react";
import Types from "../contexts/Types";

const BooksTypeSelector = ({handleTypeSelect, typeSelectValue}) => {

    const types = useContext(Types);

    return (
        <div className="selector-box">
            <select onChange={handleTypeSelect} value={typeSelectValue}>
                <option value="0">Select type</option>
                {
                    types.map(type => (
                        <option key={type.id} value={type.id}>{type.title}</option>
                    ))
                }
            </select>
        </div>
        
    )
}

export default BooksTypeSelector;
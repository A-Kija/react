import {useHistory} from 'react-router-dom';
const History = () => {

    const history = useHistory();

    const changeHistory = () => {
        console.log('yes')
        history.replace('/');
    }



    return (
        <button className="myButton" onClick={changeHistory}>Change History</button>
    )


}

export default History;
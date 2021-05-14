import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const mapStateToProps = state => {
    return { ships: state.shipsReducer.ships }
}


const Ships = ({ships}) => (
    <ul>
        {
        ships.map(boat => (<li key={uuidv4()}>{boat.type}{boat.long}</li>))
        }
    </ul>
)


const BasicShip = connect(mapStateToProps)(Ships);


export default BasicShip;
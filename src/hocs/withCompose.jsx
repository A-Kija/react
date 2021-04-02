import { compose } from 'recompose';
import CityBox from '../components/CityBox';
import ErrorComponent from '../components/ErrorComponent';
import EmptyComponent from '../components/EmptyComponent';
import ErrorCityComponent from '../components/ErrorCityComponent';
import ZooBox from '../components/ZooBox';
import withEmpty from './withEmpty';
import withError from './withError';
import withListColor from './withListColor';


// const withCompose = compose(
//     withZooBoxError,
//     withZooBoxEmpty
// );

// export default withCompose(ZooBox);

const checkZooListEmpty = (props) => {
    console.log('PROPS ZOO', props)
    return !props.zooList.length;
}
const checkCityListEmpty = (props) => {
    console.log('PROPS CITY', props)
    return !props.cityList.length;
}

const checkZooListError = (props) => !props.zooList;

const checkCityListError = (props) => !props.cityList;

const listColor = (props) => {
    if (props.zooList && props.zooList.length > 2) {
        return 'red';
    }
    if (props.cityList && props.cityList.length > 2) {
        return 'green';
    }
    return 'white';
}

export const ZooBoxWithCompose = compose(
    withError(checkZooListError, ErrorComponent),
    withEmpty(checkZooListEmpty, EmptyComponent),
    withListColor(listColor),
)(ZooBox);

export const CityBoxWithCompose = compose(
    withError(checkCityListError, ErrorCityComponent),
    withEmpty(checkCityListEmpty, EmptyComponent),
    withListColor(listColor),
)(CityBox);




/*

ZooBox
    |
    |
    V
withEmpty   ---> ZooBoxWithEmpty
withError   ---> ZooBoxWithError
----------------> ZooBox


CityBox
    |
    |
    V
withEmpty   ---> CityBoxWithEmpty
withError   ---> CityBoxWithError
----------------> CityBox




*/
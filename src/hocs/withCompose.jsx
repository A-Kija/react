import { compose } from 'recompose';
import CityBox from '../components/CityBox';
import ZooBox from '../components/ZooBox';
import withZooBoxEmpty from './withEmpty';
import withZooBoxError from './withError';


// const withCompose = compose(
//     withZooBoxError,
//     withZooBoxEmpty
// );

// export default withCompose(ZooBox);


export const ZooBoxWithCompose = compose(
    withZooBoxError,
    withZooBoxEmpty
)(ZooBox);

export const CityBoxWithCompose = compose(
    withZooBoxError,
    withZooBoxEmpty
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
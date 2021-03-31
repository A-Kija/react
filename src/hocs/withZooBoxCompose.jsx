import { compose } from 'recompose';
import ZooBox from '../components/ZooBox';
import withZooBoxEmpty from './withZooBoxEmpty';
import withZooBoxError from './withZooBoxError';

const withZooBoxCompose = compose(
    withZooBoxError,
    withZooBoxEmpty
);

export default withZooBoxCompose(ZooBox);
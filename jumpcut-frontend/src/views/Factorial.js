import { withRouter } from 'react-router-dom';
import pageGenerator from '../components/pageGenerator';

export default withRouter(pageGenerator('getNextFactorial', 'resetNextFactorial', 'Factorial Sequence Generator'));
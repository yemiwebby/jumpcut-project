import axios from 'axios';
import { utility } from './utils';

class AppService {
    static getNextFactorial = () => {
        return axios.get(`${utility.devServerUrl}/factorial`);
    }


    static resetNextFactorial = () => {
        return axios.get(`${utility.devServerUrl}/factorial/reset`);
    }

    static getNextFibonacci = () => {
        return axios.get(`${utility.devServerUrl}/fibonacci`);
    }

    static resetNextFibonacci = () => {
        return axios.get(`${utility.devServerUrl}/fibonacci/reset`);
    }

    static getNextPrime = () => {
        return axios.get(`${utility.devServerUrl}/prime`);
    }

    static resetNextPrime = () => {
        return axios.get(`${utility.devServerUrl}/prime/reset`);
    }

    static getNextRange = () => {
        return axios.get(`${utility.devServerUrl}/range`);
    }

    static resetNextRange = () => {
        return axios.get(`${utility.devServerUrl}/range/reset`);
    }

    static getNextPartial = () => {
        return axios.get(`${utility.devServerUrl}/partial`);
    }

    static resetNextPartial = () => {
        return axios.get(`${utility.devServerUrl}/partial/reset`);
    }
}

export default AppService;
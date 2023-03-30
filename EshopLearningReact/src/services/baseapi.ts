import axios from "axios";

export class BaseApi {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:5000';
        
    }
}
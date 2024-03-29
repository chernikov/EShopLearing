import axios from "axios";
import {BaseApi } from "./baseapi";

export class NameService extends BaseApi {

    constructor() {
        super();
    }
    
    public async post(name : string) : Promise<string> {
        const result = await axios.post("/api/name", name);
        return result.data;
    }
}
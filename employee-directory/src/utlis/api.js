import axios from "axios";

const url = "http://randomuser.me/api/?results=20";

//calling on api
export default {
    employees: function () {
        return axios.get(url)
    }
 };
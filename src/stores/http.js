import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const http = axios.create({
    baseURL: "http://y67534r6.beget.tech",
});

export default {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
};

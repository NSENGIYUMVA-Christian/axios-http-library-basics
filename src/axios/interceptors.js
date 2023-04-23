import axios from "axios";

const authFetch = axios.create({
  baseURL: `https://course-api.com`,
});

// request from frontend
authFetch.interceptors.request.use(
  (request) => {
    // old version
    //request.headers.common[`Accept`] = `application/json`;
    request.headers["Accept"] = "application/json";
    console.log(`request sent`);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response from the server
authFetch.interceptors.response.use(
  (response) => {
    console.log(`got response`);
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      // do something
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);

export default authFetch;

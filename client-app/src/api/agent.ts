import axios, { AxiosResponse } from "axios";
import  {Todo}  from "../models/Todo";


axios.interceptors.response.use(async (response) => {
  try {
    return response;
  } catch (err) {
    console.log(err);
    return await Promise.reject(err);
  }
});

axios.defaults.baseURL = "http://localhost:3001/api";
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// type HTTPRequest = (url: string, body?: {}, options?:{})=> Promise<Response>;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url, {headers:{"Content-Type": "application/json"}}).then(responseBody),
};

const Activities = {
  list: () => requests.get<Todo[]>("/activities"),
  details: (id: string) => requests.get<Todo>(`/activities/${id}`),
  create: (Todo: Todo) => requests.post<void>("/activities", Todo),
  update: (Todo: Todo) => requests.put<void>(`/activities/${Todo._id}`, Todo),
  delete: (id: string) => requests.del<void>(`/activities/${id}`)
  
};

const agent = {
  Activities,
};

export default agent;
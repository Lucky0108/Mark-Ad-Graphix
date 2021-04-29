import axios from '../helper/axios';

export const login = user => {
    const res = axios.post('/admin/signin', { ...user })
      res.then(response => { return response })
      res.catch(err => { return err });
    return res;
}

export const updateUser = user => {
  const res = axios.put('/admin/update', { ...user })
    res.then(response => { return response })
    res.catch(err => { return err });
  return res;
}

export const authenticate = (data, next) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
};

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
      }
      if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
      } else {
        return false;
      }
}


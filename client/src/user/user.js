import axios from '../helper/axios';

// Main Api
export const NewsletterApi = mail => {
  const res = axios.post('/newsletter', { ...mail })
    res.then(response => { return response })
    res.catch(err => { return err });
  return res;
}

export const ContactApi = contact => {
  const res = axios.post('/create/query', { ...contact })
    res.then(response => { return response })
    res.catch(err => { return err })
  return res;
}

// Admin Api
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

export const contactList = () => {
  const res = axios.get('/getquery')
    res.then(response => { return response })
    res.catch(err => { return err });
  return res;
}

// Authenticate 
export const authenticate = (data, next) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(data.token));
        next();
    }
};

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
      }
      if (localStorage.getItem("token")) {
        if (localStorage.getItem("jwt")) {
          return JSON.parse(localStorage.getItem("jwt"));
        } else {
          return false;
        }
      }
}
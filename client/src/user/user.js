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

export const removeQuery = _id => {
  const res = axios.delete('/removequery', { data: { _id : _id} })
    res.then(response => { return response })
    res.catch(err => {return err});
  return res;
}

// Authenticate 

export const getCookie = (cName) => {
  let splitCookie = document.cookie.split(";");
  for(let i=0; i < splitCookie.length; i++) {
    let cookie = splitCookie[i].split("=");
    if(cookie.includes(cName)) {
      return cookie
    }
  }
}

export const authenticate = (data, next) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(data.token));
        next();
    }
};

export const isAuthenticated = () => {
  const cookieToken = getCookie("token")
  if (typeof window == "undefined") {
      return false;
  }

  if(cookieToken) {
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  } else {
    localStorage.clear();
    return false;
  }
}
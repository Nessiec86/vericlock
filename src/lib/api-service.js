import axios from 'axios';


class User {
    constructor () {
        const APIURL = process.env.REACT_APP_PUBLIC_DOMAIN;
        this.User = axios.create ({
            baseURL: APIURL,
        });
    }

    read = (id) => {
        return this.User
        .get(`idCheck/?keyword=${id}`)
        .then(({ data }) => data );
    };

    change = (id) => {
        return this.User
        .get(`idCheckSet/?keyword=${id}`)
        .then(({ data }) => data);
        };
    
};

const user = new User();

export default user;
  
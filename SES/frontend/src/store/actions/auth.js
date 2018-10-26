import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    return {
        type: actionTypes.AUTH_LOGOUT
       // redirect('/home')
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://35.204.253.189/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const id = res.data.user;
            const name = username;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('username', name);
            localStorage.setItem('id', id);

            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const getUsername = () => {
    const username = localStorage.getItem('username');
    return username;
}

export const getUserID = () => {
    const id = localStorage.getItem('id');
    return id;
}

/*
export const getUserId = () => {

    axios.get("http://35.204.253.189/rest-auth/user/", {

    })
    .then(res => {
        const id = res.pk;
        return id;

  //  print current_user.id
})
}
*/

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://35.204.253.189/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key;
            const id = res.data.user;
            const name = username;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('username', name);
            localStorage.setItem('id', id);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
            return axios.all([
                axios.post('http://127.0.0.1:8000/api/createhousehold', {
                  user_id: id,
                  user: name,
                  money: 100,
                  battery: 100
                }),
                axios.post('http://127.0.0.1:8000/api/createenergyrates', {
                  user_id: id,
                  productionrate: 0,
                  consumptionrate: 0,
                  stoves: 0,
                  lights: 0,
                  household_appliances: 0,
                  home_entertainment: 0,
                  solar_panels: 0,
                  windmills: 0
                })
              ])

        .catch(err => {
            dispatch(authFail(err))



        })
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}

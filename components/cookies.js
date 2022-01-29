import Cookies from 'js-cookie'
import { getUrl } from './apis';

export function getCookie(name = "access_token"){
    const cookie = Cookies.get(name)
    return cookie
}

export function setCookie(name, value){
    Cookies.set(name, value, { path: '/', domain: `.${getUrl()}`, expires: 30 })
}

export function deleteCookie(name = "access_token"){
    document.cookie = name + "=;path=/;domain=." + getUrl() + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}
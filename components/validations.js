export function Validate(value, type){
    var regex
    if(value != ''){
        switch(type){
            case 'mobile':
                regex = /^[0-9]+$/
                if(!value.match(regex)){
                    return "Must be a number"
                }
                if(value.length != 10){
                    return "Mobile number should be 10 digit"
                }
            break
            case 'landline':
                regex = /^[0-9]+$/
                if(!value.match(regex)){
                    return "Must be a number"
                }
                if(value.length != 8){
                    return "Landline number should be 8 digit"
                }
            break
            case 'email':
                regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if(!value.match(regex)){
                    return "Invalid email"
                }
            break
            case 'url':
                let url
                try{
                    url = new URL(value)
                } catch(_){
                    return "Invalid url"
                }
            default: regex = ''
        }
    }
    return true
}
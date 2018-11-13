import Api from './Api'

export default {
    monsters (credentials){
        return Api().get('monsters', credentials)
    }
}
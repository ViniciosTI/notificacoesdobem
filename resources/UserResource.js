import { Platform } from 'react-native';
import Resource from "./Rousource";


export default class UserResource extends Resource{

    constructor(){
        super()
    }

    newUser = async() =>{
        return await this._get('app/new?platform=' + Platform.OS)
    }

    postTouch = async (uuid) => {
        return this._post('app/' + uuid+'/touch')
    }

    postPushToken = async (uuid, pushtoken) => {
        return this._post('app/' + uuid + '/pushtoken',{pushtoken: pushtoken})
    }

    getNotification = async (uuid) => {
        return this._get('app/' + uuid + '/notification')
    }

    getCategories = async (uuid, period) => {
        return this._get('app/' + uuid + '/categories/'+period)
    }

    postCategories = async (uuid, period, categories) => {
        return this._post('app/'+uuid +'/categories/'+ period, {
            categories: categories
        })

    }
}
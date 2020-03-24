import Config from 'react-native-config'

export default class Resource {
    constructor(){
        this.url = Config.API_URL
    }

    _post = async(path,data)=>{
        try {
            let response = await fetch(
                this.url+path,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    cache: 'no-cache'
                }
            );
            return await response.json();
            
        } catch (error) {
            throw error
        }
    }

    _get = async (path) => {
        console.log(this.url+path)
        try {
            let response = await fetch(
                this.url+path,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-cache'
                }
            );
            return await response.json();

        } catch (error) {
            console.dir(error);
            throw error
        }
    }
}
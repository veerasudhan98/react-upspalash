//AXIOS IS THIRD PARTY LIBRARY INSTREAD OF "fetch"
import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID RPTtVQ2zzTgyWKpyoCkE-LijBGbNbJXDVn3JwjhKnjY'
    }
})
require('dotenv').config();


module.exports={
    URLS: {
        ROTA_ENDPOINT: process.env.URL
    },

    HEADERS:{
        API_TOKEN: { "token": "21545454fsfejlkjk" },
        CONTENT_TYPE: {"accept": "application/json"}
    }
}
const needle = require('needle');
const token = process.env.BEARER_TOKEN;
require('dotenv').config()

const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

async function getRequest() {

   
    const params = {
        'query': '#tests'
    }

    const res = await needle('get', endpointUrl, params, {
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

(async () => {

    try {
        // Make request
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });

    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();

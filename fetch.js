const axios = require('axios');

async function fetchData() {
    try {
        // const response = await axios.get("https://swapi.dev/api/people/1");
        const response = await axios.get("https://extern-api.com/data");
        return response.data;
    } catch (error) {
        console.er("Error fetch data!", error);
        throw error;
    }
}

module.exports = { fetchData }
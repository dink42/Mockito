const { fetchData } = require('./fetch')
const axios = require('axios');

jest.mock('axios');

describe("Test of API Mocking", () => {
    /* it("Test works with API SWAPI", async () => {
        const response = await fetchData();
        expect(response['name']).toEqual('Luke Skywalker');
    }) */

    it("Sucessful mocking from the API", async () => {
        // Define the Mockdata, predefined API req from the API
        const mockData = { 'name': 'Luke Skywalker' };
        axios.get.mockResolvedValue({ 'data': mockData });

        // Get fetchData();
        const response = await fetchData();

        expect(response).toEqual(mockData);
    });

    it("Know error predefiend to the API request", async () => {
        // Mocking a error message
        const mockError = new Error("Failed API request");
        axios.get.mockRejectedValue(mockError);

        // Get the data from the function calling the external API
        await expect(fetchData()).rejects.toThrow(mockError);
    })
})

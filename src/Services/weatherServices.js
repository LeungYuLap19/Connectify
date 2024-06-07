import axios from "axios";

async function getWeather() {
    try {  
        const res = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=8d3ff23f0882438d82d115648231708&q=Hong%20Kong');
        if (res.status === 200) {
            return res.data.current;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed get weather');
        return null;
    }
}

export {
    getWeather
}
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
    const { query } = req;
    const { city } = query;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).end(error.message);
    }
};
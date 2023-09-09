import axios from "axios";
export const API_URL = 'https://www.googleapis.com/books/v1/volumes/'
export const API_KEY = "AIzaSyDUXIw7OS6KiOjd8g4YC8WNvprnou-b8kI"


const $api = axios.create({
    baseURL: API_URL
})

export default $api;

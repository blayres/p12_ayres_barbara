import axios from "axios";

export async function getUser(id) {

    try{
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function getUserActivity(id) {

    try{
        const response = await axios.get(`http://localhost:3000/user/${id}/activity`);
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function getUserAverageSessions(id) {

    try{
        const response = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function getUserPerformance(id) {

    try{
        const response = await axios.get(`http://localhost:3000/user/${id}/performance`);
        return response.data;
    }catch(error) {
        return [];
    }
    
}
import axios from "axios";
// import { getUserMock, getUserActivityMock, getUserAverageSessionsMock, getUserPerformanceMock } from '../mock/UserMock';

const api = axios.create({
  baseURL: `http://localhost:3000/`,
});

/**
 * Retrieve user activity
 * @param {string} id
 * @returns {Array}
 */
export const getUserActivity = async (id) => {
  // return getUserActivityMock(id)
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/activity`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
/**
 * Get User Infos
 * @param {string} id
 * @returns {object}
 */

export const getUser = async (id) => {
  // return getUserMock(id)
  try {
    const res = await api.get(`http://localhost:3000/user/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 * Get User Performance
 * @param {string} id
 * @returns {object}
 */

export const getUserPerformance = async (id) => {
  // return getUserPerformanceMock(id)
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
/**
 * Get User Average Session
 * @param {string} id
 * @returns {object}
 */

export const getUserAverageSessions = async (id) => {
  // return getUserAverageSessionsMock(id)
  try {
    const res = await api.get(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

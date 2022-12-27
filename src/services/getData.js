/* eslint-disable default-case */
import { getUserActivity,getUserAverageSessions, getUser, getUserPerformance, } from "./UserService";
// import { getUserActivity,getUserAverageSessions, getUser, getUserPerformance, } from "./dataMocked";


  /**
   * 
   * @param {string} type 
   * @param {number} id 
   * @returns {Array}
   */

 export const getData = async (type, id) => {
    let data = [];

    switch (type) {
      case "USER_ACTIVITY":
        data = await getUserActivity(id);
        break;
      case "USER_PERFORMANCE":
        data = await getUserPerformance(id);
        break;
      case "USER_AVERAGE_SESSIONS":
        data = await getUserAverageSessions(id);
        break;
      case "USER_MAIN_DATA":
        data = await getUser(id);
        break;
    }
    return data;
  }; 

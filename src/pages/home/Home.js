import './Home.css'
import IconCalories from '../../components/icons/iconCalories.js'
import IconProtein from '../../components/icons/iconProtein.js'
import IconCarbs from '../../components/icons/iconCarbs.js'
import IconFat from '../../components/icons/iconFat.js'
import SimpleBarChart from '../../components/recharts/SimpleBarChart.js'
import SimpleRadarChart from '../../components/recharts/SimpleRadarChart.js'
import ShapePieChart from '../../components/recharts/ShapePieChart.js'
import TinyLineChart from '../../components/recharts/TinyLineChart.js'
import {getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../services/UserService'
// import {getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../mock/UserMock'
import React, {useEffect, useState} from 'react'


/**
 * Component for showing the home page with four graphs and the user's nutritional details.
 * @returns Homepage
 */

function Home() {
 
    const [user, setUser] = useState([])
    const [userActivity, setUserActivity] = useState([])
    const [userAverageSessions, setUserAverageSessions] = useState([])
    const [userPerformance, setUserPerformance] = useState([])


      useEffect(() => {
        async function init() {
            const user = await getUser(18)
            setUser(user)
    
            const userActivity = await getUserActivity(18)
            setUserActivity(userActivity)
    
            const userAverageSessions = await getUserAverageSessions(18)
            setUserAverageSessions(userAverageSessions)
    
            const userPerformance = await getUserPerformance(18)
            setUserPerformance(userPerformance)
        }
        init();

    }, []);

    
        if (!user.data || !userActivity.data || !userAverageSessions.data || !userPerformance.data) {
            return (
                <div>
                    Ops, l'API est indisponible. Réessayer dans quelques minutes.
                </div>
            )
        }
        return (
            <div className='home'>
                <div className='titlesHome'>
                    <h1 className='title'>Bonjour <span>{user.data.userInfos.firstName} </span></h1>
                    <h3 className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
                </div>
    
                <div className='mainHome'>
    
                    <div className='graphicsHome'>
                        <div className='graphicTop'>
                            <SimpleBarChart data={userActivity.data.sessions} />
                        </div>
    
                        <div className='graphicsBottom'>
                            <div className='graphicBottomLeft'>
                                <TinyLineChart data={userAverageSessions.data.sessions} />
                            </div>
                            <div className='graphicBottomMid'>
                                <SimpleRadarChart data={userPerformance.data} />
                            </div>
                            <div className='graphicBottomRight'>
                                <ShapePieChart score={user.data.score} />
                            </div>
                        </div>
                    </div>
    
    
                    <div className='infosHome'>
    
                        <div className='info'>
                            <div className='infoLeft'>
                                <div className='iconInfo'>
                                <IconCalories />
                                </div>
                            </div>
                            <div className='infoRight'>
                                <p className='infoNumber'>{user.data.keyData.calorieCount}kCal</p>
                                <p className='infoTitle'>Calories</p>
                            </div>
                        </div>
    
                        <div className='info'>
                            <div className='infoLeft'>
                                <div className='iconInfo'>
                                    <IconProtein />
                                </div>
                            </div>
                            <div className='infoRight'>
                                <p className='infoNumber'>{user.data.keyData.proteinCount}g</p>
                                <p className='infoTitle'>Proteines</p>
                            </div>
                        </div>
    
                        <div className='info'>
                            <div className='infoLeft'>
                                <div className='iconInfo'>
                                    <IconCarbs />
                                </div>
                            </div>
                            <div className='infoRight'>
                                <p className='infoNumber'>{user.data.keyData.carbohydrateCount}g</p>
                                <p className='infoTitle'>Glucides</p>
                            </div>
                        </div>
    
                        <div className='info'>
                            <div className='infoLeft'>
                                <div className='iconInfo'>
                                    <IconFat />
                                </div>
                            </div>
                            <div className='infoRight'>
                                <p className='infoNumber'>{user.data.keyData.lipidCount}g</p>
                                <p className='infoTitle'>Lipides</p>
                            </div>
                        </div>
    
                    </div>
    
                </div>
                
            </div>
        )
    }

export default Home;
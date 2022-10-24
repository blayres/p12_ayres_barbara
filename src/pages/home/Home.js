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
import React from 'react'



class Home extends React.Component {
 
    constructor() {
        super();
        this.state = { user: [], userActivity: [], userAverageSessions: [], userPerformance: [] };
      }
    
      async componentDidMount() {
        const user = await getUser(18)
        this.setState({ user: user });

        const userActivity = await getUserActivity(18)
        this.setState({ userActivity: userActivity });
        // console.log(this.state.user)
        // console.log(this.state.userActivity)

        const userAverageSessions = await getUserAverageSessions(18)
        this.setState({ userAverageSessions: userAverageSessions });


        const userPerformance = await getUserPerformance(18)
        this.setState({ userPerformance: userPerformance });
  
      } 

    render() {
        if (!this.state.user.data || !this.state.userActivity.data || !this.state.userAverageSessions.data || !this.state.userPerformance.data) {
            return null
        }
        return (
            <div className='home'>
                <div className='titlesHome'>
                    <h1 className='title'>Bonjour <span>{this.state.user.data.userInfos.firstName} </span></h1>
                    <h3 className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
                </div>
    
                <div className='mainHome'>
    
                    <div className='graphicsHome'>
                        <div className='graphicTop'>
                            <SimpleBarChart data={this.state.userActivity.data.sessions} />
                        </div>
    
                        <div className='graphicsBottom'>
                            <div className='graphicBottomLeft'>
                                <TinyLineChart data={this.state.userAverageSessions.data.sessions} />
                            </div>
                            <div className='graphicBottomMid'>
                                <SimpleRadarChart data={this.state.userPerformance.data} />
                            </div>
                            <div className='graphicBottomRight'>
                                <ShapePieChart data={this.state.user.data} />
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
                                <p className='infoNumber'>{this.state.user.data.keyData.calorieCount}kCal</p>
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
                                <p className='infoNumber'>{this.state.user.data.keyData.proteinCount}g</p>
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
                                <p className='infoNumber'>{this.state.user.data.keyData.carbohydrateCount}g</p>
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
                                <p className='infoNumber'>{this.state.user.data.keyData.lipidCount}g</p>
                                <p className='infoTitle'>Lipides</p>
                            </div>
                        </div>
    
                    </div>
    
                </div>
                
            </div>
        )
    }
    }

export default Home;
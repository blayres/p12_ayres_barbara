import './SideBar.css'
import IconMeditation from '../icons/iconMeditation';
import IconSwimming from '../icons/iconSwimming';
import IconBike from '../icons/iconBike';
import IconBodybuilding from '../icons/iconBodybuilding';

/**
 * Component for showing the SideBar from the site.
 * @returns SideBar with 4 icons and copiryght
 */

function SideBar() {
    return (
        <div className='sideBar' >

            <div className='icons'>
                <div className='meditation'>
                    <IconMeditation />
                </div>
                <div className='swimming'>
                    <IconSwimming />
                </div>
                <div className='bike'>
                    <IconBike />
                </div>
                <div className='bodybuilding'>
                    <IconBodybuilding />
                </div>
            </div>

            <div className='copiryght'>Copiryght, SportSee 2020</div>

        </div>
    )
}

export default SideBar;
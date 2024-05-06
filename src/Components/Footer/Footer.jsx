import './Footer.css'
import icon from '../../Assets/icon.svg'

function Footer() {
    return (
        <div className='container1'>
            <ul>
                <li className='target'>
                    <button>
                        <img src="https://adl-foundation.adidas.com/flags/1-2-1/us.svg" />
                        <span>United States</span>
                    </button>
                </li>
                <li className='target3'>
                    <a href="#">Your Privacy Choices</a>
                    <span className='target2'>
                        <img src={ icon } />
                    </span>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li className='target4'>
                    <a href="#">Terms & Conditions</a>
                </li>
            </ul>
            <div>
                <span>© 2024 adidas America, Inc.</span>
            </div>
        </div>
    );
}

export default Footer;
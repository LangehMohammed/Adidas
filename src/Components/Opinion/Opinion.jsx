import './Opinion.css'
import { IoIosArrowUp } from "react-icons/io"

function Count() {
    return (
        <div className="container4">
            <div className="child1">
                <h5>Your opinion counts</h5>
                <p>We strive to serve you better and appreciate your feedback</p>
                <div></div>
            </div>
            <a href="#navigation" className='child2'>
                <span className='target'>< IoIosArrowUp /></span>
                <span>Back to top</span>
            </a>
            <div className="child3">
                <a href="#">Login</a>
                <a href="#">Your Bag(0)</a>
            </div>
        </div>
    );
}

export default Count
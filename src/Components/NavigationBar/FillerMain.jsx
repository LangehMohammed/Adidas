function FillerMain({title, cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10}){
    return(
        <li className='first-child-wrapper main-section'>
            <div className='holder-1'>
                <a href="#">
                    <div>
                        {title}
                    </div>
                </a>
                <ul>
                    <li>
                        <a href="#">
                            <div>
                                {cont1}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                {cont2}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                {cont3}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                {cont4}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                {cont5}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                {cont6}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                {cont7}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                {cont8}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                {cont9}
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className='separator'>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                <img src={cont10}/>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    );
}
export default FillerMain;
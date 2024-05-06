import './Main.css'
import Maindata from "../../DB/Main"
import MainCard from './MainCard';

function Main (){

    function renderMain(maindata){
        return Maindata.map(({id, img1, img2, img3, video1, video2, video3, title, description, btn1, btn2}) =>(
            <MainCard key={id}
                img1 = {img1}
                img2 = {img2}
                img3 = {img3}
                video1= {video1}
                video2= {video2}
                video3= {video3}
                title = {title}
                description = {description}
                btn1 = {btn1}
                btn2 = {btn2}
            />
        ));
    }

    const result = renderMain(Maindata)
    
    return(
        <div className="container5">
            {result}
        </div>
    )

}

export default Main;
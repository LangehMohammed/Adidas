import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function MainCard({img1, img2, img3, video1, video2, video3, title, description, btn1, btn2}){

    const Video1 = () => <video className='main' autoPlay muted loop ><source src= { video1 } type="video/mp4"/></video>;

    const RenderVideo1 = ({checkVid}) => {
        if(checkVid != null){
            return <Video1/>
        }
    };

    const Video2 = () => <video className='mainSub' autoPlay muted loop ><source src= { video2 } type="video/mp4"/></video>;

    const RenderVideo2 = ({checkVid}) => {
        if(checkVid != null){
            return <Video2/>
        }
    };

    const Video3 = () => <video className='mainSub2' autoPlay muted loop ><source src= { video3 } type="video/mp4"/></video>;

    const RenderVideo3 = ({checkVid}) => {
        if(checkVid != null){
            return <Video3/>
        }
    };

    const Image1 = () => <img className='main' src={ img1 }  />;

    const RenderImage1 = ({checkImage}) => {
        if(checkImage != null){
            return <Image1/>
        }
    };

    const Image2 = () => <img className='mainSub' src={ img2 } />;

    const RenderImage2 = ({checkImage}) => {
        if(checkImage != null){
            return <Image2/>
        }
    };

    const Image3 = () => <img className='mainSub2' src={ img3 } />;

    const RenderImage3 = ({checkImage}) => {
        if(checkImage != null){
            return <Image3/>
        }
    };

    const Button1 = () => <a href="#">{btn1}<span>< HiOutlineArrowNarrowRight /></span></a>;

    const RenderButton1 = ({checkButton}) => {
        if(checkButton != null){
            return <Button1/>
        }
    };

    const Button2 = () => <a href="#">{btn2}<span>< HiOutlineArrowNarrowRight /></span></a>;

    const RenderButton2 = ({checkButton}) => {
        if(checkButton != null){
            return <Button2/>
        }
    };

    const Pause = () => {
        document.querySelector('.pause').className = 'pause deactivate';
        document.querySelector('.play').className = 'play active';
    };

    const Play = () => {
        document.querySelector('.pause').className = 'pause active';
        document.querySelector('.play').className = 'play deactivate';
    };

    return(
        <div className="wrapper">
            <div className="pic">
                <RenderImage3 checkImage={img3}/>
                <RenderVideo3 checkVid={video3}/>
                <RenderImage2 checkImage={img2}/>
                <RenderVideo2 checkVid={video2}/>
                <RenderImage1 checkImage={img1}/>
                <RenderVideo1 checkVid={video1}/>
            </div>
            <div className='content'>
                <div className='wrapper1'>
                    <div className='child1'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className='child2'>
                        <RenderButton1 checkButton={btn1}/>
                        <RenderButton2 checkButton={btn2}/>                          
                    </div>
                    <div className="child3">
                        <button>
                            <span className="play">
                                <svg onClick={Play} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M30 22L16.5 13.3397V30.6603L30 22ZM26.2959 22L18.5 16.9989V27.0011L26.2959 22Z" fill="white"></path>
                                </svg>
                            </span>
                            <span className="pause">
                                <svg onClick={Pause} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 14H17V30H19V14ZM27 14H25V30H27V14Z" fill="white"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainCard
function Card({img, video, title, category, price}){

    const Video = () => <video autoPlay muted loop ><source src= { video } type="video/mp4"/></video>;

    const RenderVideo = ({checkVid}) => {
        if(checkVid != null){
            return <Video/>
        }
    };

    const Price = () => <span className='price'>{ price }</span>;

    const RenderPrice = ({checkPrice}) => {
        if(checkPrice != null){
            return <Price/>
        }
    };

    return(
        <li>
            <section>
                <div className="holder">
                    <img src= { img } />
                    <RenderVideo checkVid={video}/>
                    <span className='heart'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M387 1482 l-97 -97 0 -145 0 -145 355 -355 355 -355 355 355 355 355 0 145 0 145 -98 98 -97 97 -145 0 -145 0 -112 -112 -113 -113 -113 113 -112 112 -145 0 -145 0 -98 -98z m465 -209 l148 -148 148 148 147 147 75 0 74 0 53 -52 53 -52 0 -75 0 -74 -275 -276 -275 -276 -275 275 -275 276 0 74 0 74 52 53 52 53 76 0 75 0 147 -147z"></path></g>
                        </svg>
                    </span>
                    <RenderPrice checkPrice={price} />
                </div>
                <div className="caption">
                    <p>{ title }</p>
                    <p className='target'>{ category }</p>
                    <div className="shop">
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </section>
        </li>
    );
}

export default Card
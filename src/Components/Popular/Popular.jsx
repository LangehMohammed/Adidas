import './Popular.css'
import popular from '../../DB/Popular'
import Filler from './Filler';

function Popular(){

    function populate(popular){
        return popular.map(({id, title}) =>(
            <Filler key={id}
                title = {title}
            />
        ));
    }

    const result = populate(popular)

    return (
        <div className="container9">
            <div className="wrapper">
                <div className="header">
                    <h2>Popular right now</h2>
                </div>
                <div className="content">{ result }</div>
            </div>
        </div>
    );
}

export default Popular
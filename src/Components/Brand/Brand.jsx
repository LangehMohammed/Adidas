import './Brand.css'
import brand from '../../DB/Brand'
import Card from '../Card';

function Brand(){

    function rederBrand(brand){
        return brand.map(({id, img, video, title, description}) =>(
            <Card key={id}
                img = {img}
                video= {video}
                title = {title}
                category = {description}
                price = {null}
            />
        ));
    }

    const result = rederBrand(brand)

    return(
        <div className="container8">
            <ul>{ result }</ul>
        </div>
    );
}

export default Brand;
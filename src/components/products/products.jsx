import"./products.css"
import { popularProducts } from '../../pages/data';
import Product from './product';

export default function Products() {
  return (
    <div className='aContainer'>
        {popularProducts.map((P)=>(
            <Product key={P.id} P={P}/>
        ))}

    </div>
  )
}

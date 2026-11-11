import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductPage() {
  const params = useParams(); //  {id:1}
  // console.log(params); //  {id:1}
  const id = params.id === undefined ? undefined : parseInt(params.id); // 1
  const requiredProduct = products.find((product) => product.id === id);
  // console.log(requiredProduct); // display the corresponding product details

  return (
    <div>
      {requiredProduct === undefined ? (
        <h1> unknown product</h1>
      ) : (
        <>
          <h1>{requiredProduct.name}</h1>
          <h1>{requiredProduct.description}</h1>
          <h1>{requiredProduct.price}</h1>
        </>
      )}
    </div>
  );
}

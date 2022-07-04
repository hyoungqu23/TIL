import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'p1',
    price: 5,
    name: 'Product Name 1',
    description: 'Product Description 1',
  },
  {
    id: 'p2',
    price: 12,
    name: 'Product Name 2',
    description: 'Product Description 2',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;

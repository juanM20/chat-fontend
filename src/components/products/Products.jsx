export const Products = () => {
    return (
        <div className="products-container">
        <h2>Products</h2>
        <div className="product-card">
            <h3>Product 1</h3>
            <p>Price: $10</p>
            <p>Quantity: 5</p>
            <button>Add to Cart</button>
        </div>
        <div className="product-card">
            <h3>Product 2</h3>
            <p>Price: $15</p>
            <p>Quantity: 3</p>
            <button>Add to Cart</button>
        </div>
        <div className="product-card">
            <h3>Product 3</h3>
            <p>Price: $20</p>
            <p>Quantity: 8</p>
            <button>Add to Cart</button>
        </div>
        </div>
    );
}
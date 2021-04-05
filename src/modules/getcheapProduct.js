export const getcheapProduct = data => {
    let productPriсes = [],
        cheapProduct = null;
    if(data.length) {
        productPriсes = data.reduce((products, product) => [...products, product.price], [...productPriсes]);
        data.map((product, index) => Math.min(...productPriсes) === product.price ? cheapProduct = data[index] : cheapProduct);
    }
    return cheapProduct;
}
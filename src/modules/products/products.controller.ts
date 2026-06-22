let products = [];

export const getProducts = (req, res) => {
  res.json(products);
};

export const createProduct = (req, res) => {
  const newProduct = {
    id: Date.now(),
    ...req.body
  };

  products.push(newProduct);

  res.json(newProduct);
};
let inventory = [];

export const getInventory = (req, res) => {
  res.json(inventory);
};

export const createInventory = (req, res) => {
  const item = {
    id: Date.now(),
    ...req.body
  };

  inventory.push(item);

  res.json(item);
};
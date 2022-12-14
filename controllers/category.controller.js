const categoryService = require("./../services/category.service");
const createCategory = async (req, res) => {
  const response = await categoryService.create(req.body);
  if (!response) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
  return res.status(201).json({
    message: "successfully created category",
  });
};

module.exports = {
  createCategory,
};

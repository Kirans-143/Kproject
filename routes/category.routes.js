const categoryController = require("./../controllers/category.controller");
const categoryValidator = require("./../middlewares/category.validator");

const routes = (app) => {
  app.post(
    "/kproject/api/v1/category",
    [categoryValidator.validateCreate],
    categoryController.createCategory
  );
};

module.exports = routes;

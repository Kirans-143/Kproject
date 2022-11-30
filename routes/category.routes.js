const categoryController = require("./../controllers/category.controller");
const routes = (app) => {
  app.post("/kproject/api/v1/category", categoryController.createCategory);
};

module.exports = routes;

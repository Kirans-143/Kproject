const Category = require("./../models/index").Category;
const create = async (data) => {
  try {
    const category = await Category.create({
      name: data.name,
      description: data.description,
    });
    return category;
  } catch (err) {
    console.log("something wrong");
    console.log(err);
  }
};
module.exports = {
  create,
};

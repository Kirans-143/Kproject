const validateCreate = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: " Catgeory name is missing",
    });
  }
  next();
};
module.exports = { validateCreate };

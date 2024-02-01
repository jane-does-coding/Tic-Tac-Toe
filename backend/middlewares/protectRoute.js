const protectRoute = async (req, res, next) => {
  try {
  } catch (err) {
    res.status({ message: err.message });
  }
};

module.exports = protectRoute;

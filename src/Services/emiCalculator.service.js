const { Emi } = require("../Modals/emiParametar.modal");

const calculateEmiAmount = async (req, res) => {
  try {
    console.log(req.body);
    // const emi = await Emi.create(req.body);
    res.status(200).send({ data: 'emi' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  calculateEmiAmount,
};

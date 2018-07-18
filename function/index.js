var vin = require("vin-lite");

exports.vinprovider = (req, res) => {
  var vinNumber = req.query.vin;

  if (vinNumber && vinNumber.trim() && vin.isValid(vinNumber, true)) {
    //Get vin details
    var vinDetails = vin.decode(vinNumber, false);
    vinDetails["vinNumber"] = vinNumber;
    res.type("json");
    res.status(200);
    res.send(JSON.stringify(vinDetails));
  }

  res.status(400).send();
};

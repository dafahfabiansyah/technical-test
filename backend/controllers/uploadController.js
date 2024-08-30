const csv = require("csv-parser");
const fs = require("fs");

exports.uploadCSV = (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      fs.unlinkSync(req.file.path); // Remove file after processing
      res.json(results);
    });
};

const User = require("../models/Data");

exports.importData = async (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ error: "Invalid data format" });
    }

    const usersToImport = data.map((row) => ({
      id: row[0],
      nama: row[1],
      email: row[2],
      telepon: row[3],
      alamat: row[4],
    }));

    const importedUsers = await User.insertMany(usersToImport);

    res.status(200).json({ success: true, importedUsers });
  } catch (error) {
    console.error("Error importing data:", error);
    res.status(500).json({ error: "Failed to import data" });
  }
};

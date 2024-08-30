export const handleImportData = async (selectedData: string[][]) => {
  try {
    console.log("Selected Data to Import:", selectedData);

    const response = await fetch("http://localhost:5000/import", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: selectedData }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Data imported successfully:", result);
    } else {
      console.error("Failed to import data:", response.statusText);
    }
  } catch (error) {
    console.error("Error during data import:", error);
  }
};

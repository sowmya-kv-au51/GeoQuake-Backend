import fetch from "node-fetch";
import EarthquakeData from "../models/EarthquakeData.js";
export async function getInitialData(req, res) {
  const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  let fullData = await response.json()

  let filteredData = fullData?.Infogempa?.gempa.map((item, index) => {
    let newObject = new EarthquakeData({
      id: index,
      dateTime: item.DateTime,
      region: item.Wilayah,
      magnitude: item.Magnitude,
      latitude: item.Coordinates?.split(",")[0],
      longitude: item.Coordinates?.split(",")[1],
    })
    newObject.save()
  })
}

export const getDBData = async (req, res) => {
  const data = await EarthquakeData.find()
  res.send(data);
}

import mongoose from "mongoose";

const EarthquakeDataSchema = new mongoose.Schema({
    dateTime: String,
    region: String,
    magnitude: String,
    latitude: String,
    longitude: String
});

const EarthquakeData = mongoose.model("EarthquakeData", EarthquakeDataSchema)

export default EarthquakeData;
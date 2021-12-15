import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const TechsSchema = new mongoose.Schema({
  order: {
    type: Number,
  },
  title: {
    type: String,
  },
  icon: {
    type: String,
  },
});

export default mongoose.models.Techs || mongoose.model("Techs", TechsSchema);

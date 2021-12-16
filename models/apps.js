import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const AppsSchema = new mongoose.Schema({
  title: {
    /* The name of this pet */
    type: String,
  },
  techDesc: {
    type: String,
  },
  shortDesc: {
    type: String,
  },
  description: {
    type: String,
  },
  mainTechnologies: {
    type: Array,
  },
  otherTechnologies: {
    type: Array,
  },
  links: {
    github: {
      type: String,
    },
    liveLink: {
      type: String,
    },
  },
});

export default mongoose.models.App || mongoose.model("App", AppsSchema);

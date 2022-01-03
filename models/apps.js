import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const AppsSchema = new mongoose.Schema({
  locale: {
    pl: {
      techDesc: {
        type: String,
      },
      shortDesc: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    en: {
      techDesc: {
        type: String,
      },
      shortDesc: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  },
  title: {
    /* The name of this pet */
    type: String,
  },
  mainTechnologies: {
    type: Array,
  },
  otherTechnologies: {
    type: Array,
  },
  mainPage: {
    type: Boolean,
    default: false,
  },
  finishDate: {
    type: Date,
  },
  credentials: {
    loginLink: { type: String },
    username: { type: String },
    password: { type: String },
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

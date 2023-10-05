const mongoose = require("mongoose");

const { Schema } = mongoose;
const temeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Teme || mongoose.model("Teme", temeSchema);

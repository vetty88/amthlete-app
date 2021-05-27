const Schema = mongoose.Schema;
import conn from "../server"


// Create Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

userSchema.virtual("competitions", {
  ref: "Competition",
  foreignField: "userId",
  localField: "_id"
});


module.exports = User = conn.model("users", userSchema);

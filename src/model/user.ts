import { Schema, model } from "mongoose";
const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
      default:
            "https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png",
    },
  },
  {
    timestamps: true,
  }
);
export default model("User", UserSchema);

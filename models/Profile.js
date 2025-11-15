const { Schema, model } = require("mongoose");
const Post = require("./Post");

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      maxLength: 100,
    },
    bio: {
      type: String,
      trim: true,
      maxLength: 500,
    },
    profilePic: {
      type: String,
    },
    socialLinks: {
      website: String,
      facebook: String,
      twitter: String,
      github: String,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: Post,
      },
    ],
    bookMarks: [
      {
        type: Schema.Types.ObjectId,
        ref: Post,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Profile = model("Profile", profileSchema);

module.exports = Profile;

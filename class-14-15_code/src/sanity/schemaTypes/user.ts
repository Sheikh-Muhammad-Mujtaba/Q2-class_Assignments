export const UserSchema = {
    name: "user",
    title: "User",
    type: "document",
    fields: [
      {
        name: "username",
        title: "Username",
        type: "string",
      },
      {
        name: "avatar",
        title: "Avatar",
        type: "image",
      },
      {
        name: "bio",
        title: "Bio",
        type: "text",
      },
    ]
  }
export const VideoPostSchema = {
    name: "videoPost",
    title: "Video Post",
    type: "document",
    fields: [
      {
        name: "caption",
        title: "Caption",
        type: "string",
      },
      {
        name: "video",
        title: "Video",
        type: "file",
        options: {
          accept: "video/*"
        }
      },
      {
        name: "author",
        title: "Author",
        type: "reference",
        to: [{ type: "user" }]
      },
      {
        name: "likes",
        title: "Likes",
        type: "number",
        initialValue: 0,
      },
      {
        name: "shares",
        title: "Shares",
        type: "number",
        initialValue: 0,
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
      }
    ]
  }
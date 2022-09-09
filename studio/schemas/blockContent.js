export default {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" }
      ],
      lists: [
        {
          title: "Bullet",
          value: "bullet"
        }
      ],
      marks: {
        decorators: [
          {
            title: "Strong",
            value: "strong"
          },
          {
            title: "Emphasis",
            value: "em"
          }
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url"
              }
            ]
          }
        ]
      }
    },
    {
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
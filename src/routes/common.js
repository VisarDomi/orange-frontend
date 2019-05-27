export function setMeta(title) {
  let meta = {
        title: `${title}`,
        metaTags: [
          {
            name: "description",
            content: `The ${title} page of Orange Limo.`
          },
          {
            property: "og:description",
            content: `The ${title} page of Orange Limo.`
          }
        ]
      }
  return meta
}

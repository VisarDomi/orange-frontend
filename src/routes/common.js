export function setMeta(title, auth=false) {
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
  if (auth) {
    meta = {
      ...meta,
      requiresAuth: true
    }
  }
  return meta
}

export function setMeta(title, no_auth=false) {
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
        ],
        requiresAuth: true
      }
  if (no_auth) {
    meta.requiresAuth = false
  }
  return meta
}

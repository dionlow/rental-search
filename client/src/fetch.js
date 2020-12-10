const searchURL = "http://localhost:4000/search"
export const defaultLimit = 20

export const getSearchUrl = ({ query, pageIndex }) => {
  const params = {
    q: query,
    page: pageIndex + 1,
    limit: defaultLimit,
  }

  const url = new URL(searchURL)
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  )
  return url
}
export const urlFetcher = async (url) => {
  const result = await (await fetch(url)).json()
  // Uncomment to check if fetching is cached
  // console.log("FETCHING: ", { result })
  return result
}

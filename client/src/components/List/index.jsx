import React from "react"
import useSWR from "swr"

// import Loading from "../Loading"
import { container } from "./styles.module.css"
import { getSearchUrl, urlFetcher } from "../../fetch"
import ListCard from "../ListCard"

const List = ({ query, pageIndex }) => {
  const url = getSearchUrl({ query, pageIndex })

  // useSWR handles caching via keys.
  // The first parameter is the url string
  // which is handled by the cache.
  const { data, error } = useSWR(url, urlFetcher)
  console.log("LIST: ", { url, data, error })

  if (!query || !url) return <div>Type in a search term and click search!</div>

  // TODO: add error and loading states
  return (
    <>
      <h1>LIST</h1>
      <div className={container}>
        {data?.results?.map((item) => {
          const props = {
            id: item?.id,
            name: item?.name,
            imageUrl: item?.imageUrl,
            price: item?.prices?.price,
            period: item?.prices?.period,
            city: item?.city,
            country: item?.country,
            province: item?.province,
          }
          return <ListCard {...props} />
        })}
      </div>
    </>
  )
}

export default List

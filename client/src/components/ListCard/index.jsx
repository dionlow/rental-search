import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { card as cardStyle } from "./styles.module.css"
import "react-lazy-load-image-component/src/effects/blur.css"

const ListCard = ({
  id,
  name,
  // imageUrl, // currently replaced by hardcoded placeholders
  price,
  period,
  city,
  country,
  province,
}) => {
  return (
    <div className={cardStyle}>
      <LazyLoadImage
        key={id}
        alt={`placeholder ${id}`}
        effect="blur"
        delayMethod="debounce"
        threshold={100}
        delayTime={100}
        src={`https://picsum.photos/id/${id}/300/200.jpg`}
        height={200}
        width={300}
      />
      <h5>{name}</h5>
      <div>
        {price} {period.toLowerCase()}
      </div>
      <div>
        {city}, {province}, {country}
      </div>
    </div>
  )
}

export default ListCard

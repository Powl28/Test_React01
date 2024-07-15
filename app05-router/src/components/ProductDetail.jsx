import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

  const params = useParams();


  return (
    <div>ProductDetail 
      {params.id && <h1>Sent {params.id}</h1>}
    </div>
  )
}

export default ProductDetail
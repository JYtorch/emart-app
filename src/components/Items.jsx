import React, { useCallback, useRef } from 'react'
import Item from './Item'
import './items.css'

function Items({items, loading, error, setPageNumber, hasMore}) {

    const getNextPage = useCallback((value) => {
        setPageNumber(value)
    }, [setPageNumber])

    const observer = useRef()

    const lastItemRef = useCallback((node) => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                console.log("visible")
                getNextPage(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [hasMore, getNextPage])

  return (
    <>
        <ul className="ern-product-list">
            {items && items.map((item, idx) => {
                if (items.length === idx + 1) {
                    return <Item ref={lastItemRef} item={item} key={idx} />
                }
                return <Item item={item} key={idx} />
            })}
        </ul>
        {loading && <p style={{textAlign: 'center', paddingBottom: '20px', width: '100%'}}>Loading...</p>}
        {error && <p>Error</p>}
    </>
  )
}

export default Items
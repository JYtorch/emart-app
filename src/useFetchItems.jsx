import { useEffect, useState } from 'react'

export default function useFetchItems(query, pageNumber, getNextPage) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
      setItems([])
      getNextPage(0)
    }, [query, getNextPage])
  
    useEffect(() => {
        async function getItems () {
            const res = await fetch('./data.json')
    
            let data = await res.json()
            if (query !== '전체') {
                data = data.filter(item => item.type === query)
            }
            if (pageNumber < Math.floor(data.length / 10)) {
                setHasMore(true)
                setItems(prevItems => [...prevItems, ...data.slice(pageNumber * 10, pageNumber * 10 + 10)])
            } else {
                setHasMore(false)
                setItems(prevItems => [...prevItems, ...data.slice(pageNumber * 10)])
            }
            setLoading(false)
        }
        setLoading(true)
        setError(false)
        try {
            getItems()
        } catch (error) {
            setLoading(false)
            setError(true)
        }

    }, [query, pageNumber])

  return { loading, error, items, hasMore }
}
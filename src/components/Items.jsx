import React, { useEffect, useState } from 'react'

function Items({items}) {
    const [curPage, setCurPage] = useState(1);
    const total = Math.ceil(items.length / 10 + 1)
    
    useEffect(() => {
        if (curPage < total) {
            console.log("스크롤 리스트 페이징", curPage, total)
        } else {
            console.log("스크롤 페이징 종료", curPage, total)
        }
    }, [curPage])
    
    
  return (
    <ul className="ern-product-list">
        {items && items.map((item, idx) => {
            return <li className="list" data-exhi="50611" data-div="B" key={idx}>
            <a className="link" href="/onlineLeaflet/listView.do?master_seq=5042&amp;sku_code=8809617945344&amp;exhibition_div=B&amp;tmstmp=1661672303000&amp;trcknCode=leaflet_list" data-cmd="open_main_webpage" title="상세 페이지로 이동">
                <div className="box-img">
                    <img className="img lazy" data-img2="http://item.ssgcdn.com/71/52/57/item/1000369575271_i1_290.jpg" data-type="1" alt="HBAF 시즈닝 아몬드/믹스넛/땅콩/병아리콩" src={item.imgUrl} style={{display: "inline-block"}} />
                </div>
            </a>
            <div className="box-info">
                <a className="link" href="/onlineLeaflet/listView.do?master_seq=5042&amp;sku_code=8809617945344&amp;exhibition_div=B&amp;tmstmp=1661672303000&amp;trcknCode=leaflet_list" data-cmd="open_main_webpage" title="상세 페이지로 이동">
                    <p className="product">{item.name}</p>
                    <span className="ern-product-badge">
                            <span className="color-blue">※동일가격 교차구매 가능</span>
                            <span className="color-blue">1+1</span>
                    </span>
                </a>
                <div className="favorite_bx">
                    <button className="btn_favorite " data-master-seq="5042" data-sku="8809617945344" data-biz="10" title="좋아요">
                        <span className="num">{item.likes}</span>
                    </button>
                    <a href="/onlineLeaflet/listView.do?master_seq=5042&amp;sku_code=8809617945344&amp;exhibition_div=B&amp;tmstmp=1661672303000&amp;trcknCode=leaflet_list" data-cmd="open_main_webpage" className="btn_reply" title="댓글보기" style={{visibility:"visible"}}>
                        {item.comments}
                    </a>
                </div>
            </div>
        </li>
        })}                	
    </ul>
  )
}

export default Items
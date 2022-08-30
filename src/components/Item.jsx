import React from 'react'

function Item({item}, ref) {
  return (
    <li className="list" ref={ref}>
        <a className="link" href="/">
            <div className="box-img">
                <img className="img lazy" alt={item.name} src={item.imgUrl} style={{display: "inline-block"}} />
            </div>
        </a>
        <div className="box-info">
            <a className="link" href="/">
                <span className="price price-ed">{item.originalPrice.toLocaleString('ko-KR')}</span>
                <span className="price price-st">{item.discountPrice.toLocaleString('ko-KR')}원</span>
                <p className="product" style={{fontSize: '14px'}}>{item.name}{item.id}</p>
                <span className="ern-product-badge">
                    <span className="color-red">신세계포인트 적립 시 5% 할인</span>
                </span>
            </a>
            <div className="favorite_bx">
                <button className="btn_favorite" title="좋아요">
                    <span className="num">{item.likes}</span>
                </button>
                <a href="/" className="btn_reply" style={{visibility:"visible"}}>
                    {item.comments}
                </a>
            </div>
        </div>
    </li>
  )
}

export default React.forwardRef(Item)
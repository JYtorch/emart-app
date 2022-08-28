import React from 'react'

function Menu() {
  return (
    <div className="App">
      <div className="ern-leaflet-sub-menu" id="leaflet-sticky-menu">
          <h3 className="tit">금주의 전단 상품을 만나보세요</h3>               
            <div className="ern-leaflet-swiper-menu">
                <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)", transitionDuration: "500ms"}}>
                  <div className="slide" style={{marginRight: "20px"}}>
                    <a className="link exhibition-list-item" href="/" data-val="0" title="선택됨">
                      <span className="txt">전체</span>
                    </a>
                  </div>
                  <div className="slide" style={{marginRight: "20px"}}>
                      <a className="link exhibition-list-item" href="/" data-val="50610">
                        <span className="txt">가공</span>
                      </a>
                    </div>
                  <div className="slide" style={{marginRight: "20px"}}>
                      <a className="link exhibition-list-item" href="/" data-val="50611">
                        <span className="txt">신선</span>
                      </a>
                    </div>
                  <div className="slide" style={{marginRight: "20px"}}>
                      <a className="link exhibition-list-item" href="/" data-val="50612">
                        <span className="txt">대한민국수산대전</span>
                      </a>
                    </div>
                  <div className="slide" style={{marginRight: "20px"}}>
                      <a className="link exhibition-list-item" href="/" data-val="50613">
                        <span className="txt">시니어 WEEK</span>
                      </a>
                    </div>
                  <div className="slide" style={{marginRight: "20px"}}>
                      <a className="link exhibition-list-item" href="/" data-val="50614">
                        <span className="txt">마음은 가볍게 준비는 완벽히</span>
                      </a>
                    </div>
                  <div className="slide" style={{marginRight: "20px"}}>
                      <a className="link exhibition-list-item" href="/" data-val="50615">
                        <span className="txt">SUMMER 클e어런스</span>
                      </a>
                    </div>
                  <div className="slide" style={{marginRight: "20px"}}>
                      <a className="link exhibition-list-item" href="/" data-val="50616">
                        <span className="txt">금주의 초특가 찬스</span>
                      </a>
                    </div>
                  </div>
            </div>
            <a className="list-toggle-button" href="/">
                <span className="blind">펼치기</span>
            </a>
        </div>
    </div>
  )
}

export default Menu
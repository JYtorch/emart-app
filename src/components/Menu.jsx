import React, { useRef, useState } from 'react'
import './Menu.css'
const activeMenuStyle = {
  color: "#222",
  fontWeight: 700,
  borderBottom: '3px solid #222'
}

function Menu({setQuery}) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState("전체")
  let menuWrapper = useRef()

  function scrollToTarget (tag) {
    if (tag) {           
      setTimeout(() => {
        tag.scrollIntoView({behavior: "smooth", inline: "center", block: 'nearest'})
      }, 0)
    }
  }
  
  function handleMenu (e) {
    setIsOpen(false)
    setActiveMenu(e.target.textContent)
    setQuery(e.target.textContent)

    if (e.target.className === 'txt' || e.target.className === 'slide') {
      if (e.target.textContent === activeMenu) {
        window.scrollTo({top: 0, behavior: 'smooth'})
        return
      }
      e.target.scrollIntoView({behavior: "smooth", inline: "center", block: 'nearest'})

    } else {
      menuWrapper = menuWrapper.current.childNodes[1].childNodes[0].childNodes[0].childNodes
      for (let i = 0; i < menuWrapper.length; i++) {
        if (menuWrapper[i].textContent === e.target.textContent) {
          scrollToTarget(menuWrapper[i].childNodes[0])
          break
        }
      }
    }
  }
  const menuList = ["전체", "가공", "신선", "대한민국수산대전", "시니어 WEEK", "마음은 가볍게 준비는 완벽히", "SUMMER 클e어런스", "금주의 초특가 찬스"]
  return (
      <div className="menu-container" id="sticky-menu" style={{height: 'auto'}} ref={menuWrapper}>
        <h3 className="menu-title">금주의 전단 상품을 만나보세요</h3>
        <div className="toggle-box" style={!isOpen ? {display: 'block'} : {display: 'none'}}>
          <div className="slide-container">
            <div className="slide-wrapper">
              {menuList.map((menu, idx) => {
                return <div onClick={handleMenu} className="slide" key={idx}>                    
                <span className="txt" style={menu === activeMenu ? activeMenuStyle : null}>{menu}</span>
              </div> 
              })}
            </div>
          </div>            
          <span className="toggle-button" onClick={() => setIsOpen(true)}>
            <span className="blind">펼치기</span>
          </span>
        </div>
        <div className='opened-menu-container' style={isOpen ? {display: 'block'} : {display: 'none'}}>
          <p className='open-menu-title'>전체메뉴</p>
          <span className="toggle-button" onClick={() => setIsOpen(false)} style={{transform: 'rotate(180deg)', marginTop: '1rem'}}>
            <span className="blind">펼치기</span>
          </span>
          <div className="opened-menu">
            {menuList.map((menu, idx) => {
              if (menu === "전체") return <span onClick={handleMenu} className={activeMenu === menu ? "opened-menu menu-item-txt txt-active" : "opened-menu menu-item-txt"} key={idx}>전체</span>
              return <span onClick={handleMenu} className={activeMenu === menu ? "opened-menu menu-item-txt txt-active" : "opened-menu menu-item-txt"} key={idx}>{menu}</span>
            })}
          </div>
        </div>
      </div>  
  )
}

export default Menu
import React from 'react'
import './style.css'

//          component: Footer 레이아웃          //
export default function Footer() {
  
  //          event handler: 인스타 아이콘 버튼 클릭 이벤트 처리          //
  const onGithubIconButtonClickHandler= () => {
    window.open('https://github.com/Sukyeong-Kwak')
  }


  //          event handler: 인스타 네이버 블로그 버튼 클릭 이벤트 처리          //
  const onVelogIconButtonClickHandler= () => {
    window.open('https://velog.io/@sukk')
  }

  //          render: Footer 레이아웃 렌더링          //
  return (
    <div id='footer'>
      <div className='footer-contatiner'>
        <div className='footer-top'>
          <div className='footer-logo-box'>
            <div className='icon-box'>
              <div className='icon logo-light-icon'></div>
            </div>
            <div className='footer-logo-text'>{'SUKK\'s Board'}</div>
          </div>
          <div className='footer-link-box'>
            <div className='footer-email-link'>{'suk.kwakk@gmail.com'}</div>
            <div className='icon-button' onClick={onGithubIconButtonClickHandler}>
              <div className='icon github-icon'></div>
            </div>
            <div className='icon-button' onClick={onVelogIconButtonClickHandler}>
              <div className='icon velog-icon'></div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-copyright'>
            {'Copyright © 2022 Jukoyakki. All Rights Reserved.'}
          </div>
        </div>
      </div>
    </div>
  )
}

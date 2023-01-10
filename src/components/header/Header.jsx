import React from 'react'
import { CTA } from './CTA'
import './header.css'
import { HeaderSocials } from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Juan Taype</h1>
        <h5 className="text-light">Fullstack - Movil developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="logo" />
        </div>
      </div>
      <article style="width: 100%; height: 80px;">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7885628483894847"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-gw-3+1f-3d+2z"
     data-ad-client="ca-pub-7885628483894847"
     data-ad-slot="4174451670"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
      </article>
    </header>
  )
}

export default Header

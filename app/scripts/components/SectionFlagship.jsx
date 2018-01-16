
import React from 'react'

class SectionFlagship extends React.Component{
  render(){
    return (
      <section className={"wp-contents " + (this.props.selectedSection === 1 ? 'show' : 'hide')}>
        <aside className="menu">
          <p className="menu-label">FLAGSHIP GUIDE SPR 18</p>
          <ul className="menu-list" style={{display:`none`}}>
              <li><a target="_blank" href="guides/component_2018/type-styles.html">Type Styles</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=10061548" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/4by5.html">4:5 2UP TOI</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=10061554" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/4by1-inset-carousel.html">4x1 Inset Carousel</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=10061559" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/4by1-product.html">4x1 Product</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=10061563" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/4by1-copy.html">4x1 Copy</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=10061567" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/2by2-product.html">2x2 Product</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=10061571" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/2by1-product.html">2x1 Product</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=11338343" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/2by1-cig-new.html">2x1 CIG NEW</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=12222832" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/2by2-cig-inset.html">2x2 CIG INSET</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=10061576" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/hero-banner-copy.html">Hero Banner Copy</a></li>
              <li><a href="https://mk-confluence.sparkred.com/pages/viewpage.action?pageId=12223233" target="_blank"><span className="icon is-small"><i className="fa fa-file-text-o"></i></span></a><a target="_blank" href="guides/component_2018/1by1-cig-quote.html">1x1 CIG Quote</a></li>
          </ul>
          <p className="menu-label">HOMEPAGE SPR 18</p>
          <ul className="menu-list" style={{display:`none`}}>
            <li><a target="_blank" href="guides/component_2018/homepage.html">Homepage</a></li>
            <li><a target="_blank" href="guides/component_2018/homepage_ada_testing.html">Homepage ADA Test</a></li>
            <li><a target="_blank" href="dev/componentGenerator/component-generator.html">Homepage Generator</a></li>
          </ul>
          <p className="menu-label">SALE BANNER SPR 18</p>
          <ul className="menu-list" style={{display:`none`}}>
              <li><a target="_blank" href="guides/sale_banner/sale_banner_homepage.html">Sale Banner Homepage</a></li>
              <li><a target="_blank" href="guides/sale_banner/sale_banner_regular.html">Sale Banner Women's LP</a></li>
          </ul>
          <p className="menu-label">FLAGSHIP GUIDE</p>
          <ul className="menu-list" style={{display:`none`}}>
            <li><a target="_blank" href="guides/component_2017/landing-page/16by9.html">16:9</a></li>
            <li><a target="_blank" href="guides/component_2017/landing-page/16by9-collection-3.html">16:9 Collection 3</a></li>
            <li><a target="_blank" href="guides/component_2017/landing-page/397by250.html">397:250</a></li>
            <li><a target="_blank" href="guides/component_2017/landing-page/397by250-collection-3.html">397:250 Collection 3</a></li>
            <li><a target="_blank" href="guides/component_2017/landing-page/1by1.html">1:1</a></li>
            <li><a target="_blank" href="guides/component_2017/landing-page/1by1-collection-3.html">1:1 Collection 3</a></li>
            <li><a target="_blank" href="guides/component_2017/landing-page/4by5.html">4:5</a></li>
            <li><a target="_blank" href="guides/component_2017/landing-page/4by5-collection-3.html">4:5 Collection 3</a></li>
            <li><a target="_blank" href="guides/component_2017/landing-page/collection-quote.html">collection quote</a></li>
            <li><a target="_blank" href="guides/component_2017/landing-page/collection-components.html">Resort 18 Collection</a></li>
          </ul>
          <p className="menu-label">CIG</p>
          <ul className="menu-list" style={{display:`none`}}>
            <li><a target="_blank" href="guides/component_2018/2by1-cig-new.html">2x1 CIG New</a></li>
            <li><a target="_blank" href="guides/component_2017/cig/2x1-vertical.html">2x1 Vertical</a></li>
            <li><a target="_blank" href="guides/component_2017/cig/2x2.html">2x2</a></li>
            <li><a target="_blank" href="guides/component_2017/cig/4x1.html">4x1</a></li>
            <li><a target="_blank" href="guides/component_2017/cig/4x1-image-only.html">4x1 Image</a></li>
            <li><a target="_blank" href="guides/component_2017/cig/1x1.html">1x1</a></li>
          </ul>
          <p className="menu-label">CIG - UGC</p>
          <ul className="menu-list" style={{display:`none`}}>
            <li><a target="_blank" href="guides/component_2017/cig-ugc/1x1.html">1x1</a></li>
            <li><a target="_blank" href="guides/component_2017/cig-ugc/2x2.html">2x2</a></li>
            <li><a target="_blank" href="guides/component_2017/cig-ugc/2x1.html">2x1</a></li>
            <li><a target="_blank" href="guides/component_2017/cig-ugc/4x1-a.html">4x1 A</a></li>
            <li><a target="_blank" href="guides/component_2017/cig-ugc/4x1-b.html">4x1 B</a></li>
            <li><a target="_blank" href="guides/component_2017/cig-ugc/4x1-c.html">4x1 C</a></li>      
          </ul>
          <p className="menu-label">HERO BANNER</p>
          <ul className="menu-list" style={{display:`none`}}>
            <li><a target="_blank" href="guides/component_2017/hero-banner/16by9.html">16x9</a></li>
            <li><a target="_blank" href="guides/component_2017/hero-banner/16by9-full.html">16x9 Full</a></li>
            <li><a target="_blank" href="guides/component_2017/hero-banner/gift-guide-tabs.html">Gift Guide Tabs</a></li>
            <li><a target="_blank" href="guides/component_2017/hero-banner/4by5.html">4x5</a></li>
            <li><a target="_blank" href="guides/component_2017/hero-banner/flex-height-a.html">Flex Height A</a></li>
            <li><a target="_blank" href="guides/component_2017/hero-banner/flex-height-b.html">Flex Height B</a></li>
          </ul>
        </aside>
      </section>
    )
  }
}

export default SectionFlagship
import React from 'react'

const SubNavList = ({folderData}) => {
  const subNavClick = (e) => {
    const countryButton = $(e.currentTarget)
    countryButton.addClass('is-active').siblings().removeClass('is-active')
    $(`.wp-contents-sub-country`).hide();
    $(`.wp-contents-sub-country:eq(${countryButton.index()})`).show();

    if(localStorage !== undefined) localStorage['currentCountry'] = countryButton.index()
  }
  return Object.keys(folderData).map((countryCode) =>
    <li key={countryCode.toString()} onClick={(e) => {subNavClick(e)}}>
      <a>
        <span>{countryCode}</span>
      </a>
    </li>
  )
}

class SubNav extends React.Component{
  constructor(props){
    super(props)
    this.folderData = props.folderData
  }
  render(){
    return (
      <section id="nav-countries">
        <div className="tabs is-toggle is-fullwidth is-large wp-countries">
          <ul>
            <SubNavList folderData={this.folderData} />
          </ul>
        </div>
      </section>
    )
  }
}

export default SubNav
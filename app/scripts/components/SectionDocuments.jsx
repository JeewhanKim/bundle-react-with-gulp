
import React from 'react'

class SectionDocuments extends React.Component{
  render(){
    return (
      <section className={"wp-contents " + (this.props.selectedSection === 2 ? 'show' : 'hide')}>
        <aside className="menu">
          <ul className="menu-list">
            <li>
              <a target="_blank" href="https://mk-confluence.sparkred.com/display/EDE/Coding+Guide">
                <span className="panel-icon"><i className="fa fa-book"></i></span>Confluence
              </a>
            </li>
            <li>
              <a target="_blank" href="https://mk-confluence.sparkred.com/display/EDE/INT+Environment+Status">
                <span className="panel-icon"><i className="fa fa-book"></i></span>INT Status
              </a>
            </li>
            <li>
              <a target="_blank" href="https://mk-confluence.sparkred.com/display/EDE/Release+Notes">
                <span className="panel-icon"><i className="fa fa-book"></i></span>Release Notes
              </a>
            </li>
          </ul>
        </aside>
      </section>
    )
  }
}

export default SectionDocuments
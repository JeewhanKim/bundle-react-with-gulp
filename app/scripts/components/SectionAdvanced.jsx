
import React from 'react'

class SectionAdvanced extends React.Component{
  render(){
    return (
      <section className={"wp-contents " + (this.props.selectedSection === 3 ? 'show' : 'hide')}>
        <div className="tile is-parent">
          <div className="notification is-child">
            <button className="delete"></button>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
            consectetur adipiscing elit
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-12">
            <div className="tile is-parent is-vertical is-4">
              <a className="button is-danger">Generate Production CSS</a>
              <a className="button is-danger">Deploy Production CSS</a>
              <progress className="progress is-danger" value="15" max="100">15%</progress>
              <div className="notification is-info">
                <button className="delete"></button>
                <strong>Production CSS</strong> file has been created in '' folder.
              </div>
              <div className="notification is-danger">
                <button className="delete"></button>
                <strong>Generating CSS failed</strong>
              </div>
            </div>
            <div className="tile is-parent is-vertical is-4">
              <a className="button is-success">Generate Production JS</a>
              <a className="button is-success">Deploy Production JS</a>
              <progress className="progress is-success" value="50" max="100">15%</progress>
            </div>
            <div className="tile is-parent is-vertical is-4">
              <a className="button is-warning">Generate Production HTML</a>
              <a className="button is-warning">Update HTML Contents (BCC Link)</a>
              <a className="button is-warning">Update HTML Contents (XM Link)</a>
              <progress className="progress is-warning" value="95" max="100">15%</progress>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SectionAdvanced
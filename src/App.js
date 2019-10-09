import React, { Component } from 'react'
class App extends Component {
  render() {
    return (
      <div className="container">
        <section className="sidebar">
          
        </section>
        <section className="main">
          <header className="header">
            <span className="username">Hi</span>
          </header>
          <div className="wrapper">主体内容</div>
          <footer className="footer">
            <span className="copyright">Copyright@2019</span>
          </footer>
        </section>
      </div>
    )
  }
}
export default App

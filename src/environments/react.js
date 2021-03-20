import React from 'react'

const LOGO_URL = 'https://5g.nrw/app/uploads/2020/11/Acc_Logo_Black_Purple_RGB-1536x405.png'
const ReactEnv = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LOGO_URL} className="App-logo" alt="logo" />
        <p>
          Welcome to the <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a> team at Facebook.
        </p>

      </header>
    </div>
  )
}

export default ReactEnv

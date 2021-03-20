import React from 'react'

const LOGO_URL = 'https://5g.nrw/app/uploads/2020/11/Acc_Logo_Black_Purple_RGB-1536x405.png'
const Accenture = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LOGO_URL} style={{ width: '60%'}} alt="logo" />
        <p>
          Onboarding Session
        </p>

      </header>
    </div>
  )
}

export default Accenture

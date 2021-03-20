import Accenture from './accenture'
import React from './react'
// import AWS from './aws'

const environments = {
  accenture: () => <Accenture />,
  react: () => <React />
}

export default environments

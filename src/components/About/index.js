// Write your JS code here

import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1 className="about-heading">About Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default Home

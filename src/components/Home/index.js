// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">Home Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default Home

import Login from '../../components/login/Login'
import './Home.css'

const Home = () => {
  return (
    <div className="Home-homeContainer">
      <form action="" className="Home-formController">
        <div className="home-logo">
          <div>
            <img
              src={require('../../assets/img_virtuallearn logo_splash 2.png')}
              alt=""
              className="home-logoImg"
            />
          </div>
          <Login />
        </div>
      </form>
    </div>
  )
}

export default Home

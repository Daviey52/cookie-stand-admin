import type { NextPage } from 'next'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'


const Home: NextPage = () => {
  const { user } = useAuth();
  return (
    <div>
      {user ? <CookieStandAdmin /> : <LoginForm />}
    </div >
  )
}

export default Home

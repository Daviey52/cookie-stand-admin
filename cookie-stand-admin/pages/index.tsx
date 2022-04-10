import type { NextPage } from 'next'

import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Main from '../components/Main'
const Home: NextPage = () => {


  const [location, setLocation] = useState('None');
  const [maximum, setmax] = useState(0);
  const [minimum, setmin] = useState(0);
  const [average, setavg] = useState(0);

  function addDataHander(event) {
    event.preventDefault();
    setLocation(event.target.location.value);
    setmin(event.target.min.value);
    setmax(event.target.max.value);
    setavg(event.target.avg.value);


  }
  return (
    <div>
      <Head />
      <Header />
      <Main addDataHander={addDataHander}
        location={location}
        minimum={minimum}
        maximum={maximum}
        average={average}
      />
      <Footer />
    </div >
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CalendarView from '../components/calendarview.tsx';
import React from 'react';


const Home: NextPage = () => {

  const [pages, setPages] = React.useState([]);;

  const getCurrentDayOfYear = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const addPage = () => {
    const startD = getCurrentDayOfYear();
    const pageCopy = [...pages];
    const key = pageCopy.length + 1;
    pageCopy.push()
    setPages(pageCopy);
  }

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const documentHeight = document.body.scrollHeight;
    const bottomThreshold = 50;

    if (scrollPosition >= documentHeight - bottomThreshold) {
      addPage();
    }
  };


  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    addPage();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const startD = getCurrentDayOfYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>My Smoking Habits App</title>
        <meta name="description" content="Quit Smoking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
{/*         {
          pages.map((components) => {
            return (
              <>
                {components}
              </>
            )
          })
        } */}
        
        <CalendarView startDate={startD} />
      </main>
    </div>
  )
}

export default Home

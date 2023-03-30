import { useState, useEffect } from "react";
import Navbar from './shared/navbar';
import Goal from './goal';
import Counter from './counter'
import styled from 'styled-components';
import DailyChart from './charts/daily.chart'
import { ViewWrapper } from '../styles/component.styles';


const CalendarInfiniteScroll: React.FC<Props> = ({ startDate, cid }) => {

  
  const [page, setPage] = useState(startDate);
 

  const getPageDate = (page) => {
    const date = new Date(2023, 0, page);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const PageDate = () => {
    return (
      <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        {getPageDate(page)}
      </div>
    )
  }

  const [data, setData] = useState([]);

  const handleCounterClick = (newSmokeData) => {
    setData([...data, newSmokeData]);
  };

  return (

    <div key={cid}>
      <ViewWrapper>
        <Navbar left={<PageDate />} right={
          <Goal text = {"Click to set goal"}/>
        }></Navbar>
        <div>
          <Counter handleCounterIncrement={handleCounterClick} />
        </div>
        <div>
          <DailyChart dataset={data}/>
        </div>
      </ViewWrapper>
    </div>
  );
};

export default CalendarInfiniteScroll;

type Props = {
  startDate : any;
  cid: string | number;
}
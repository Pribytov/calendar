import moment  from "moment";
import { Title } from "../Title";
import { Monitor } from "../Monitor";
import { CalendarGrid } from "../CalendarGrid";
import styled from "styled-components";
import React, { useState } from 'react';

const ShadowWrapper = styled.div`
  border: 1px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;

function App() {
 
  moment.updateLocale( 'en', {
    week: {dow: 1}
  });

  //const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');
  
  window.moment = moment;

  const prevHandler = () => {
    setToday(prev => prev.clone().subtract(1, 'month'));
  };

  const todayHandler = () => {
    setToday(moment());
  };

  const nextHandler = () => {
    setToday(prev => prev.clone().add(1, 'month'));
  };

  return (
    <ShadowWrapper>
      <Title />
      <Monitor
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid startDay={startDay} />

    </ShadowWrapper>
  );
}

export default App;

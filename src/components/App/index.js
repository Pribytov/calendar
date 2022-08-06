import moment  from "moment";
import { Title } from "../Title";
import { Monitor } from "../Monitor";
import { CalendarGrid } from "../CalendarGrid";
import styled from "styled-components";

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

  const today = moment();
  const startDay = today.clone().startOf('month').startOf('week');
  
  window.moment = moment;
  return (
    <ShadowWrapper>
      <Title />
      <Monitor today={today} />
      <CalendarGrid startDay={startDay} />

    </ShadowWrapper>
  );
}

export default App;

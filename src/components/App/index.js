import moment  from "moment";
import { Header } from "../Header";
import { Monitor } from "../Monitor";
import { CalendarGrid } from "../CalendarGrid";

function App() {
  //console.log(moment());

  // window.moment = moment;
  // moment.updateLocale( 'en', {
  //   week: {dow: 1}
  // });

  // //let startDay = moment().startOf('month').startOf('week');
  // //console.log(startDay);
  // let week = [...Array(7)].map((day) => {
  //   day = startDay;
  //   startDay = startDay.add(1, 'day');
  //   //console.log(startDay,day);
  //   return day;
  // });

  // console.log(week);


  // //debugger;
  // const startDay = moment().startOf('month').startOf('week');
  // const endDay = moment().endOf('month').endOf('week');
  // //console.log(startDay);

  
  // // moment().subtract

  // const calendar = [];

  // for (let day = startDay.clone(); !day.isAfter(endDay); day.add(1, 'days')){
  //   calendar.push(day.clone());
  //   //console.log(day);
  // }

  //console.log(calendar);

  moment.updateLocale( 'en', {
    week: {dow: 1}
  });

  const startDay = moment().startOf('month').startOf('week');
  //console.log(startDay);
  return (
    <div className="App">
      <Header />
      <Monitor />
      <CalendarGrid startDay={startDay}/>

    </div>
  );
}

export default App;

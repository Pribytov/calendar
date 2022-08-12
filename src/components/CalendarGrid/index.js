import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 2px;
    background-color: #404040;
`;

const CellWrapper = styled.div`
    min-width: 140px;
    min-height: 80px;
    background-color: #1e1f21;
    color: #dddcdd;
    background-color: ${props => props.isWeekend ? '#272829'  : '#1e1f21'};
`;

const RowInCell = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
`;

const CarrentDay = styled('div')`
    height: 100%;
    width: 100%;
    background: #f00;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CalendarGrid = ({startDay}) => {
    const totalDays = 42;
    const day = startDay.subtract(1, 'day').clone();
    console.log(day);
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    console.log(daysArray);
     
    const isCurrentDay = (day) => (
        moment().isSame(day, 'day')
    );

    return (
        <GridWrapper>
            {
                daysArray.map((dayItem, i) => (
                    <CellWrapper
                        key={dayItem.format('DDMMYYYY')}
                        isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                    >
                        <RowInCell justifyContent={'flex-end'}>
                            <DayWrapper>
                                {!isCurrentDay(dayItem) &&  dayItem.format('D')}
                                {isCurrentDay(dayItem) && <CarrentDay>  {dayItem.format('D')}</CarrentDay>}
                            </DayWrapper>
                        </RowInCell>
                    </CellWrapper>
                )) 
            }
        </GridWrapper>
    );
};

export { CalendarGrid };
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { padding } from '@material-ui/system';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 2px;
    background-color: ${props => props.isHeader ? '#1e1f21' : '#4d4c4d'};
    ${props => props.isHeader && 'border-bottom: 1px solid #4d4c4d'};
`;

const CellWrapper = styled.div`
    min-width: 140px;
    min-height: ${props => props.isHeader ? 24  : 80}px;
    background-color: ${props => props.isWeekend ? '#272829'  : '#1e1f21'};
    color: ${props => props.isSelectedMonth ? '#dddddd' : '#555759'};
`;

const RowInCell = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
    ${props => props.pr && `padding-right: ${props.pr * 8}px;`};
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

const CalendarGrid = ({startDay, today}) => {
    const totalDays = 42;
    const day = startDay.subtract(1, 'day').clone();
    console.log(day);
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    console.log(daysArray);
     
    const isCurrentDay = (day) => (
        moment().isSame(day, 'day')
    );

    const isSelectedMonth = (day) => (
        today.isSame(day, 'month')
    );

    return (
        <>
            <GridWrapper isHeader>
                {[...Array(7)].map((_, i) => (
                    <CellWrapper isHeader isSelectedMonth>
                        <RowInCell justifyContent={'flex-end'} pr={1}>
                            {moment().day(i+1).format('ddd')}
                        </RowInCell>
                    </CellWrapper>
                ))}
            </GridWrapper>

            <GridWrapper>
                {
                    daysArray.map((dayItem, i) => (
                        <CellWrapper
                            key={dayItem.unix()}
                            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                            isSelectedMonth={isSelectedMonth(dayItem)}
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
        </>
    );
};

export { CalendarGrid };
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
    flex-direction: column;
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

const ShowDayWrapper = styled('div')`
    display: flex;
    justify-content: flex-end;
`;

const EventListWrapper = styled('ul')`
    margin: unset;
    list-style-position: inside;
    padding-left: 4px;
`;

const EventItemWrapper = styled('button')`
    position: relative;
    left: -14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 115px;
    border: unset;
    background: unset;
    color: #dddddd;
    cursor: pointer;
    margin: 0;
    padding: 0;
    text-align: left;
`;

const CalendarGrid = ({startDay, today, totalDays, events, openFormHandler}) => {
    const day = startDay.subtract(1, 'day').clone();
    //console.log(day);
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    //console.log(daysArray);
     
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
                    <CellWrapper isHeader isSelectedMonth key={i}>
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
                                <ShowDayWrapper>
                                    <DayWrapper onDoubleClick={() => openFormHandler('Create', null, dayItem)}>
                                        {
                                            isCurrentDay(dayItem) ?
                                            <CarrentDay>  {dayItem.format('D')}</CarrentDay> :
                                            dayItem.format('D')
                                        }
                                    </DayWrapper>
                                </ShowDayWrapper>
                                <div>
                                    <EventListWrapper>
                                        {
                                            events
                                                .filter(event  => event.date >= dayItem.format('X')
                                                    && event.date <= dayItem.clone().endOf('day').format('X'))
                                                .map(event =>
                                                    <li key={event.id}>
                                                        <EventItemWrapper onDoubleClick={() => openFormHandler('Update', event)}>
                                                            {event.title}
                                                        </EventItemWrapper>
                                                    </li>
                                                )
                                        }
                                    </EventListWrapper>
                                </div>
                            </RowInCell>
                        </CellWrapper>
                    ))
                }
            </GridWrapper>
        </>
    );
};

export { CalendarGrid };
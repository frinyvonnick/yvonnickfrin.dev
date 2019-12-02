import React from 'react'
import { Link } from 'gatsby'

import AddToCalendarHoc from 'react-add-to-calendar-hoc'

import './Stream.css'

function formatEventDate(date, time) {
  const result = new Date(date)
  const [hours, minutes] = time.split(':')
  result.setHours(hours, minutes)
  return `${result.getFullYear()}${result.getMonth()}${result.getDate() < 10 ? `0${result.getDate()}` : result.getDate()}T${hours}${minutes}00`
}

function FrenchDate({ date }) {
  const dateToRender = new Date(date)
  return <span>{dateToRender.getDate()}/{dateToRender.getMonth()}/{dateToRender.getFullYear()}</span>
}

function Dropdown({ children }) {
  return (
    <div className="calendars">
      {children}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="add-calendar"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const AddToCalendar = AddToCalendarHoc(Button, Dropdown)
export function Stream (props) {
  const {
    title,
    date,
    startHour,
    endHour,
    duration,
    description,
    path,
  } = props
  const event = {
    title,
    description,
    location: 'https://www.twitch.tv/yvonnickfrin',
    startDatetime: formatEventDate(date, startHour),
    endDatetime: formatEventDate(date, endHour),
    duration,
  }
  return (
    <article className="stream">
      <div>
        <img src={`${path}.jpg`} alt="Social media card for the stream" />
      </div>
      <div>
        <h3><Link to={path}>{title}</Link></h3>
        <small><FrenchDate date={date} /> ({startHour} - {endHour})</small>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <AddToCalendar event={event} className="add-calendar-container" />
      </div>
    </article>
  )
}

import React, { useState } from 'react'
import { Link } from 'gatsby'
import YouTube from 'react-youtube'
import AutoSizer from 'react-virtualized-auto-sizer'

import AddToCalendarHoc from 'react-add-to-calendar-hoc'

import './Stream.css'

function formatEventDate(date, time) {
  const result = new Date(date)
  const [hours, minutes] = time.split(':')
  result.setHours(hours, minutes)
  const month = result.getMonth() + 1
  return `${result.getFullYear()}${month < 10 ? `0${month}` : month}${result.getDate() < 10 ? `0${result.getDate()}` : result.getDate()}T${hours}${minutes}00`
}

function FrenchDate({ date }) {
  const dateToRender = new Date(date)
  return <span>{dateToRender.getDate()}/{dateToRender.getMonth() + 1}/{dateToRender.getFullYear()}</span>
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
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 }) 

  const {
    title,
    date,
    startHour,
    endHour,
    duration,
    description,
    path,
    video,
    calendar = false,
    summary = false,
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
      <div className="stream-summary">
        <div>
          <img src={`${path}.jpg`} alt="Social media card for the stream" />
        </div>
        <div>
          <h3><Link to={path}>{title}</Link></h3>
          <small><FrenchDate date={date} /> ({startHour} - {endHour})</small>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          {calendar && <AddToCalendar event={event} className="add-calendar-container" />}
        </div>
      </div>
      <div>
        {!summary && (
          <>
            <h4>Informations</h4>
            <div>
              <ul>
                <li><strong>Stream:</strong>&nbsp;<a href="https://www.twitch.tv/yvonnickfrin">https://www.twitch.tv/yvonnickfrin</a></li>
              </ul>
            </div>
            {video && (
              <>
                <h4>Replay</h4>
                <div style={{
                    height,
                  }}
                >
                  <AutoSizer
                    defaultHeight={390}
                    defaultWidth={640}
                    onResize={({ width, height }) => {
                      setSize({
                        width,
                        height: width * 0.609375,
                      })
                    }}
                  >
                    {() => (
                      <YouTube
                        videoId={video}
                        opts={{
                          width,
                          height,
                        }}
                      />
                    )}
                  </AutoSizer>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </article>
  )
}

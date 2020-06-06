import React, { useState } from 'react'
import useEvents from '../../hooks/useEvents'
import Event from './event'
import LeftIcon from '../../images/arrow-left.svg'
import RightIcon from '../../images/arrow-right.svg'

function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

const Events = () => {
  const [page, setPage] = useState(1)
  const paginationItems = 2
  const events = useEvents()
  const nEvents = Math.ceil(events.length / paginationItems)
  const isFirst = page === 1
  const isLast = page === nEvents
  return (
    <section className="events" id="events">
      {paginate(events, paginationItems, page).map(event => (
        <Event key={event.id} event={event} />
      ))}

      {/*
        {!isFirst && (
        <div onClick={() => setPage(page - 1)}>
          {' '}
          <input type="image" alt="left-nav" src={LeftIcon} />
        </div>
      )}
      {!isLast && (
        <div onClick={() => setPage(page + 1)}>
          <input type="image" alt="right-nav" src={RightIcon} />
        </div>
      )}
        */}
      <div className="buttonWrapper">
        <button disabled={isFirst} onClick={() => setPage(page - 1)}>
          {' '}
          <input type="image" alt="left-nav" src={LeftIcon} />
        </button>

        <button disabled={isLast} onClick={() => setPage(page + 1)}>
          <input type="image" alt="right-nav" src={RightIcon} />
        </button>
      </div>

      {/*<div className="event">
        <a href="/">
          <div>
            <span>20.06.2020</span>
            <h3>Event Title</h3>
            <p>Nuovo evento sul Cloud della community. Non mancare!</p>
          </div>
          <img src="https://source.unsplash.com/random" alt="event" />
        </a>
      </div>
      <div className="event">
        <a href="/">
          <div>
            <span>20.06.2020</span>
            <h3>Event Title</h3>
            <p>Nuovo evento sul Cloud della community. Non mancare!</p>
          </div>
          <img src="https://source.unsplash.com/random" alt="event" />
        </a>
      </div>
      <div className="event">
        <a href="/">
          <div>
            <span>20.06.2020</span>
            <h3>Event Title</h3>
            <p>Nuovo evento sul Cloud della community. Non mancare!</p>
          </div>
          <img src="https://source.unsplash.com/random" alt="event" />
        </a>
       </div> */}
    </section>
  )
}

export default Events

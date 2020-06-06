import React, { useState } from 'react'
import { Link } from 'gatsby'
import LeftIcon from '../images/arrow-left.svg'
import RightIcon from '../images/arrow-right.svg'

const Pagination = ({ currentPage, numPages, events, allEvents }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`
  const emptyQuery = ''
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    // this is how we get all of our posts
    const posts = allEvents || []
    // return all filtered posts
    const filteredData =
      query.length > 0
        ? posts.filter(post => {
            // destructure data from post frontmatter
            const { title, tags } = post.node.childMdx.frontmatter
            const { excerpt } = post.node.childMdx
            return (
              // standardize data with .toLowerCase()
              // return true if the description, title or tags
              // contains the query string
              (excerpt &&
                excerpt.toLowerCase().includes(query.toLowerCase())) ||
              title.toLowerCase().includes(query.toLowerCase()) ||
              (tags &&
                tags
                  .join('-') // convert tags from an array to string
                  .toLowerCase()
                  .includes(query.toLowerCase()))
            )
          })
        : []
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  // const hasSearchResults = filteredData && query !== emptyQuery
  // const posts = hasSearchResults ? filteredData : allEvents
  const posts = filteredData

  return (
    <div>
      <h1>Pagination Events</h1>
      <Link to="/">Home</Link>
      <h1 style={{ textAlign: `center` }}>Writing</h1>
      <input
        type="text"
        aria-label="Search"
        placeholder="Type to filter events..."
        onChange={handleInputChange}
      />
      <pre>{JSON.stringify(events, null, 2)}</pre>
      {posts.map(({ node }) => {
        console.log('node', node)
        const { excerpt } = node.childMdx.frontmatter

        const { slug } = node.childMdx.frontmatter
        const { tags, title, date, description } = node.childMdx.frontmatter
        return (
          <article key={slug}>
            <header>
              <h2>
                <Link to={slug}>{title}</Link>
              </h2>

              <p>{date}</p>
              {tags.map(tag => (
                <span> {tag} </span>
              ))}
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: description || excerpt,
                }}
              />
            </section>
            <hr />
          </article>
        )
      })}
      {!isFirst && (
        <Link to={`/events/${prevPage}`}>
          <input type="image" alt="left-nav" src={LeftIcon} />
        </Link>
      )}
      {!isLast && (
        <Link to={`/events/${nextPage}`}>
          <input type="image" alt="right-nav" src={RightIcon} />
        </Link>
      )}
    </div>
  )
}

export default Pagination

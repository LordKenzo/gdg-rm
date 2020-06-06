// https://malikgabroun.com/gatsby-create-pages-with-mdx
exports.createPages = async ({ actions, graphql, reporter }) => {
  // graphql qui è una funzione e non più una template literal, è una interfaccia node e non più una interfaccia React come siamo soliti usarla
  const result = await graphql(`
    query AllEventsQuery {
      allFile(
        filter: {
          absolutePath: { glob: "**/events/**/*" }
          ext: { eq: ".mdx" }
        }
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                slug
                tags
                date(formatString: "DD MMMM, YYYY")
              }
              id
              excerpt(pruneLength: 200)
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Failed to get the Events', result.errors)
  } else {
    console.dir(result)
  }

  // Il path di restituzione è: result.data.allFile.edges.[node.childMdx]
  const events = result.data.allFile.edges
  const eventPerPage = 2

  const numPages = Math.ceil(events.length / eventPerPage)
  console.log(eventPerPage, numPages)
  // uso forEach al posto di map perchè non ritorno nulla
  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? '/events' : `/events/${index + 1}`,
      component: require.resolve('./src/templates/allEvents.js'),
      context: {
        allEvents: events,
        limit: eventPerPage,
        skip: index * eventPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  // L'oggetto è: events.[childMdx.frontmatter]
  events.forEach(event => {
    const slug = event.node.childMdx.frontmatter.slug
    const id = event.node.childMdx.id

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/singleEvent.js'),
      context: { id },
    })
  })
}

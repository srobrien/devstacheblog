import React from 'react'
import styled from 'styled-components'
import BlogCard from '../components/Post/BlogCard'
import Tags from '../components/Tags/Tags'
import Link from 'gatsby-link'
import Layout from '../components/index.js'
import SocialMediaBar from '../components/Social/SocialMediaBar'

const PageContainer = styled.div`
  position: relative;
  @media (max-width: 1024px) {
    margin-left: 50px;
  }
  @media (max-width: 620px) {
    margin-left: 0;
  }
`

const TagBar = styled.nav`
  margin-bottom: 30px;
  display: block;
  text-align: right;
`

const TagText = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h3 {
    margin-bottom: 3px;
    background-color: #000;
    color: #fff;
    padding: 2px;
  }
`

const HomePage = styled.section`
  top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 30px;
`

const PageNavigation = styled.div`
  font-size: 1.5rem;
  text-align: center;
  span {
    margin-left: 10px;
    margin-right: 10px;
    background: black;
    color: grey;
    padding: 3px;
    :hover {
      cursor: not-allowed;
    }
  }
  a {
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    background-image: linear-gradient(to right, #e583e2, #e583e2 50%, #000 50%);
    background-size: 220% 100%;
    background-position: 98%;
    padding: 3px;
    text-decoration: none;
    :hover {
      transition: all 0.3s cubic-bezier(0, 0, 0.23, 1);
      background-position: 0%;
      cursor: pointer;
    }
  }
`

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { tags } = pageContext.additionalContext
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout>
      <SocialMediaBar />
      <PageContainer>
        <TagBar>
          <TagText>
            <h3>REFINE POSTS BY CATEGORY</h3>
          </TagText>
          <Tags tags={tags} />
        </TagBar>
        <HomePage>
          {group.map(({ node }) => {
            return <BlogCard key={node.body.id} post={node} />
          })}
        </HomePage>

        <PageNavigation>
          <NavLink test={first} url={previousUrl} text="<<" />
          <NavLink test={last} url={nextUrl} text=">>" />
        </PageNavigation>
      </PageContainer>
    </Layout>
  )
}
export default IndexPage

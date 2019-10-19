import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const ContentContainer = styled.div`
  background-color: red;
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`

const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: green;
`

const BodyFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenterFlex>
      <ContentContainer>
        <h1> Brian Nguyen </h1>
        <p> Hey I'm Brian. Mumbo jumbo about myself here</p>
        <BodyFlex>
          <div>
            <h2> Recent Work </h2>
            <ul>
              <li>Cool thing #1</li>
              <li>Cool thing #2</li>
              <li>Cool thing #3</li>
            </ul>
          </div>
          <div>
            <h2> Socials </h2>
            <ul>
              <li>Cool thing #1</li>
              <li>Cool thing #2</li>
              <li>Cool thing #3</li>
            </ul>
          </div>
          <div>
            <h2> Awards </h2>
            <ul>
              <li>Cool thing #1</li>
              <li>Cool thing #2</li>
              <li>Cool thing #3</li>
            </ul>
          </div>
        </BodyFlex>
      </ContentContainer>
    </CenterFlex>
  </Layout>
)

export default IndexPage

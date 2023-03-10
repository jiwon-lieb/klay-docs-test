import React from 'react'
import Link from '@docusaurus/Link'
import styled from 'styled-components'

import img1 from '../../images/thum_01_L.png'
import img2 from '../../images/thum_02_L.png'
import img3 from '../../images/thum_03_L.png'
import img4 from '../../images/thum_04_L.png'
import img5 from '../../images/thum_05_L.png'
import img6 from '../../images/thum_06_L.png'

import View from '../View'
import style from '@site/src/consts/style'
import FormBgImg from '../FormBgImg'

type FeatureType = {
  title: string
  imgSrc: string
  description: JSX.Element
  to: string
}

const StyledSection = styled.section`
  ${style.setMediaWidth('lg')}
`

const StyledGrid = styled(View)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 60px 0;
  gap: 40px;

  @media ${style.media.tablet} {
    grid-template-columns: 1fr;
  }
`

const StyledImgBox = styled(View)`
  align-items: center;
  padding-bottom: 20px;
`

const featureList: FeatureType[] = [
  {
    title: 'Klaytn Overview',
    imgSrc: img1,
    description: (
      <>Take your first step with Klaytn</>
    ),
    to: '/docs/GettingStarted/klaytn-basics',
  },
  {
    title: 'Klaytn Ecosystem',
    imgSrc: img2,
    description: (
      <>Learn about the tools and resources in the Klaytn Ecosystem.</>
    ),
    to: '/docs/GettingStarted/klaytn-basics',
  },
  {
    title: 'Node Operation',
    imgSrc: img3,
    description: <>Learn how to install and operate Klaytn nodes.</>,
    to: '/docs/GettingStarted/klaytn-basics',
  },
  {
    title: 'Start Building',
    imgSrc: img3,
    description: <>Want to get started right away?</>,
    to: '/docs/GettingStarted/klaytn-basics',
  },
  {
    title: 'Node Operation',
    imgSrc: img3,
    description: <>Learn how to install and operate Klaytn nodes.</>,
    to: '/docs/GettingStarted/klaytn-basics',
  },
  {
    title: 'Node Operation',
    imgSrc: img3,
    description: <>Learn how to install and operate Klaytn nodes.</>,
    to: '/docs/GettingStarted/klaytn-basics',
  },
]

function Feature({ imgSrc, title, description, to }: FeatureType) {
  return (
    <View>
      <Link to={to}>
        <StyledImgBox>
          <FormBgImg src={imgSrc} style={{ width: '100%', height: 150 }} />
        </StyledImgBox>
        <View style={{ alignItems: 'center' }}>
          <h3>{title}</h3>
          <p style={{ textAlign: 'center' }}> {description}</p>
        </View>
      </Link>
    </View>
  )
}

export default function HomepageFeatures() {
  return (
    <StyledSection>
      <StyledGrid>
        {featureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </StyledGrid>
    </StyledSection>
  )
}

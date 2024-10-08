"use client"
import ContentContainer from './contents/content-container'
import SectionHeading from './contents/section-heading'

import TeamCards from './contents/team-cards'

const OurTeam = () => {
  return (
    <ContentContainer>
      <div className='max-w-5xl w-full flex flex-col space-y-8'>
        <SectionHeading heading='Team' title='Our Team' description='Problems trying to resolve the conflict between the two major realms of Classical Physics. Newtionian mechanics' />

        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-5'>
          <TeamCards drName='Dr. James James' subTitle='phd' imageUrl='doc1'/>
          <TeamCards drName='Dr. James James' subTitle='phd' imageUrl='doc2'/>
          <TeamCards drName='Dr. James James' subTitle='phd' imageUrl='doc3'/>
          <TeamCards drName='Dr. James James' subTitle='phd' imageUrl='doc4'/>
        </div>

      </div>

    </ContentContainer>
  )
}

export default OurTeam
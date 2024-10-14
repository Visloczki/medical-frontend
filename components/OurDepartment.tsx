import Cards from './contents/departments-cards'
import SectionHeading from './contents/section-heading'

const OurDepartment = () => {
  return (
    <div className='w-full h-full max-w-5xl flex flex-col min-h-screen items-start space-y-4 py-[80px]'>
      <SectionHeading title='Our Department' heading='Practice Advice' description='Problems trying to resolve the conflict between the two major realms of Classical physics. Newtonian mechanics.'/>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-2 w-full'>
        <Cards  image='steto' title='Quick Examination' fromPrice={150} price={75} description='We focus on ergonomics and meeting you where you work. Its only a keystroke away'/>
        <Cards  image='szuri' title='Online Appoinment' fromPrice={150} price={75}  description='We focus on ergonomics and meeting you where you work. Its only a keystroke away'/>
        <Cards  image='fityula' title='Emergency Case' fromPrice={150} price={75}  description='We focus on ergonomics and meeting you where you work. Its only a keystroke away'/>
      </div>
    </div>
  )
}

export default OurDepartment
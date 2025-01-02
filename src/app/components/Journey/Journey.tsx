import './Journey.css';
// import bgv from '../../Assests/c.mp4'
// import bgv from '../../Assests/Journeyideo.mp4'
// import bgv from '../../Assests/b.mov'

function Journey() {
  return (
        <div className="JourneyContainer">
          <video src={'../../Assests/Journeyideo.mp4'} autoPlay loop muted className='background-video'/>
        </div>
  );
}

export default Journey;

import React from 'react';
import "./jobsComponent/jobs.css";


const handleJobClick = (e) => {
    if(e == 'job'){
        console.log('job');
    }else if(e == 'acc'){
        console.log('acc');
    }
}

function jobs() {

    return(
        <>
        <div className='job-container mt-3' style={{position:"relative",top:"700px"}}>
            <div className='row'>
                 <h1 className='job-title'>Lorem ipsum dolor sit amet, con</h1>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-center' >
                    <div className="job-card" onClick={() => handleJobClick('job')}>
                         <img className="card-img-top" src={require('./jobsComponent/jobs-glyphs.png')} alt="Card image cap"/>
                         <div className="card-body">
                            <h2 className="card-text">Jobs</h2>
                         </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-center' >
                    <div className="job-card" onClick={() => handleJobClick('acc')}>
                         <img className="card-img-top" src={require('./jobsComponent/accomodation-glyphs.png')} alt="Card image cap"/>
                         <div className="card-body">
                            <h2 className="card-text">Accomodation</h2>
                         </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default jobs;
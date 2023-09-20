import React from 'react'
import "./banner.css"



const Banner = () => {
  return (
    <div className='banner'>
        <p className='bannerText'>We work with people from over the world</p>
        
        <div className='bannerContainer'>
            <div>
                <img src="./bannericons/logo 03.png" alt="" />
            </div>
            <div>
                <img src="./bannericons/waves.png" alt="" />
            </div>
            <div>
            <img src="./bannericons/logo 03.png" alt="" />
            </div>
            <div>
                <img src="./bannericons/travelers logo.png" alt="" />
            </div>
            <div>
                <img src="./bannericons/Goldlines.png" alt="" />
            </div>
            <div>
                <img src="./bannericons/9 logo.png" alt="" />
            </div>
        </div>


        
     <div>
             <div>
                <div className='texts'>
                    <h1>How it work</h1>
                </div>

                <div className='text'>
                    <p>Stocks is a production-ready library of stockable content blocks built in React Native.</p>
                </div>
            </div>
       
    

            <div>
                <div className='iconLink'>
                    <img src="./bannericons/Frame 790.svg" alt="" />
                </div>

                <div className='steps'>
                    <div>
                        <header>Step 1</header>

                         <h2>Download</h2>

                        <p>Fitnes Pro tracks your workouts, get better results, and be the best version of you</p>
                    </div>

                    <div>
                         <header>Step 2</header>

                        <h2>Choose your trainer</h2>

                        <p>Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>
            
                    </div>

                    <div>
                        <header>Step 3</header>

                        <h2>Set the goals</h2>

                        <p>Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>

                    </div>

                    <div>
                        <header>Step 4</header>

                        <h2>Workut time</h2>

                        <p>Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>

                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Banner
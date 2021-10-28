import React from 'react'

export const Home = () => {
  return(
    <div>
      <h1>TIGERS!!</h1>
      <h2>Tons of fun. Lots of learning.</h2>
      <br/>
      <h2>All in one place.</h2>
      <p>
        <img src="/images/t1.jpeg" alt="tiger relaxing after dinner" />
        <div style={{paddingTop: '10px'}}>
          Hey kids want to learn more about one of the most amazing predators on the planet.
        </div>
        <br/>
        <div>
          Its called the tiger it has stripes and big fangs!
        </div>
        <div>
          <br/>
          But if you were to talk to an expert at the zoo they would refer to them by their scientific name:
          <ul>
            <li>Panthera tigris</li>
          </ul>
        </div>
        <p>
          Use the navigation above to learn more about tigers! 
        </p>
      </p>
    </div>
  )
}
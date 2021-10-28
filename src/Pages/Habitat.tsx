import React from 'react'

export const Habitat = () => {
  return(
    <div className="habitats">
      <h1>Habitats</h1>
      <h2>Where do tigers live? Find out below!</h2>
      <p>Tigers tend to not make homes in dens but just sleep in whatever cool and secluded place they can.</p>
      <ul style={{border: '1px solid #000', width: '20%', margin: '10px auto', padding: '20px', borderRadius: '5px'}}>
        <div style={{fontWeight: 'bold', paddingBottom: '10px'}}>Tiger habitats:</div>
        <li>Rain Forests</li>
        <li>Grasslands</li>
        <li>Savannas</li>
        <li>Mangrove Swamps</li>
        <li>Memphis, Tennessee (GO TIGERS!)</li>
      </ul>
      <ul style={{border: '1px solid #000', width: '20%', margin: '10px auto', padding: '20px', borderRadius: '5px'}}>
      <div style={{fontWeight: 'bold', paddingBottom: '10px'}}>Countries where tigers live:</div>
        <li>Russia</li>
        <li>China</li>
        <li>India</li>
        <li>Nepal</li>
        <li>Bhutan</li>
        <li>Laos</li>
        <li>Cambodia</li>
        <li>Vietnam</li>
        <li>Indonesia</li>
      </ul>
    </div>
  )
}
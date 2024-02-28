import React from 'react'
import CardOne from '../../Screens/CardOne/CardOne'
import CardTwo from '../../Screens/CardTwo/CardTwo'
import CardThree from '../../Screens/CardThree/CardThree'
import CardFour from '../../Screens/CardFour/CardFour'
import CardFive from '../../Screens/CardFive/CardFive'
import CardSix from '../../Screens/CardSix/CardSix'
import CardSeven from '../../Screens/CardSeven/CardSeven'
import CardEight from '../../Screens/CardEight/CardEight'
import CardNine from '../../Screens/CardNine/CardNine'
import CardTen from '../../Screens/CardTen/CardTen'

export default function Cards() {
    return (
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', marginLeft: '10rem', gap: '2em' , marginBottom : '3rem'}}>
            <CardOne />
            <CardTwo />
            <CardThree />
            <CardFour />
            <CardFive />
            <CardSix />
            <CardSeven />
            <CardEight />
            <CardNine />
            <CardTen />
        </div>
    )
}

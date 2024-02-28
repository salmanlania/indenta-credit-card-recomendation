import React, { useState } from 'react'

// Images

import cardTenImg from './cardTen.png'

// IMPORT ICONS
import { LiaPercentageSolid } from "react-icons/lia";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";

const cardArray = [{
    tenth: {
        benifitsList: [
            'You can avail 4 supplementary cards with this card.',
            'Convenience to make your card payments in any of ADIB branches.',
            'This is a high earning rewards program.',
            'Receive up to four supplementary cards.',
            'This is an Islamic card.',
            'This card enables salary transfers',
            'Get instant SMS updates.',
            'Forex rate on this card is 3.1%',
            'You need a minimum salary of AED 5000 for this card.',
            'There is an option of balance transfer at the rate of 3% or AED 300 for this card.',
            'You need to pay an annual fee of AED 200 to avail this card.',
            {
                title: 'Benifits',
            },
            'You can receive service from ADIB travel desk.',
            'You can redeem your Etihad guest miles for House Furnishing, Travel Bookings, Electronics and Gifts for Friends and Family.',
            'You can withdraw 100% of your finance limit for your need of cash.',
            'Avail advance technology of chip and pin for safe transactions.',
            'Earn a welcome bonus of 10,000 Etihad guest miles.',
            'Receive 1 Guest mile up to 4 AED spent internationally.',
            'Receive up to 0.75 guest miles for every 4 AED spent on local transactions.',
            'Get Free Roadside assistance',
            'You can even pay for your ADIB Etihad Guest covered card’s annual fees using 12500 Etihad guest miles.',
        ],
    }
}]

export default function CardTen() {
    const [showAllBenefits, setShowAllBenefits] = useState(false);
    const maxVisibleBenefits = 3;

    const handleReadMoreClick = () => {
        setShowAllBenefits(!showAllBenefits);
    };
    return (
        <div>
            <div className="firstCard" style={{ border: '1px solid black', width: '100%', maxWidth: '65em' }}>
                <section style={{ background: '#81D3E9', margin: '0', fontSize: '22px', fontWeight: 'bold', color: 'white' }}>
                    ADIB Etihad Guest Classic Card
                </section>
                <section className='firstRow' style={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ marginTop: '13px' }} src={cardTenImg} alt="" />
                    </div>
                    <div className='others' style={{ margin: 0, padding: 0 }}>
                        <section className='otherPartOneRow' style={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginBottom: '-25px', gap: '18em' }}>
                            <div className='otherPartOneRowFirst' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><LiaPercentageSolid className='icon' /></li>
                                    <li>Profit Rate</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'fle' }}>
                                    <li>2.99%</li>
                                </ol>
                            </div>
                            <div className='otherPartOneRowTwo' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><AiOutlineMoneyCollect className='icon' /></li>
                                    <li>Minimum Salary</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li>AED 5K</li>
                                </ol>
                            </div>
                        </section>

                        {/* First Row End */}

                        <section className='otherPartTwoRow' style={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginBottom: '-25px', gap: '18.5em' }}>
                            <div className='otherPartTwoRowFirst' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><MdOutlineAttachMoney className='icon' /></li>
                                    <li>Annual Fee</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li>AED 200</li>
                                </ol>
                            </div>
                            <div className='otherPartTwoRowTwo' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><MdAccountBalanceWallet className='icon' /></li>
                                    <li>Balance Transfer</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li>Yes</li>
                                </ol>
                            </div>
                        </section>

                        {/* Second Row End */}

                        <section className='otherPartTwoRow' style={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginBottom: '-25px', gap: '18em' }}>
                            <div className='otherPartTwoRowFirst' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '13px' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center', gap: '3px' }}>
                                    <li><FaCashRegister className='icon' /></li>
                                    <li>Cashback</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li>No</li>
                                </ol>
                            </div>
                        </section>

                    </div>
                </section>
                <section className='benifits'>
                    <div className="benifitsHeading" style={{ fontSize: '1.4rem', marginLeft: '2rem', marginBottom: '-22px' }}>
                        <h4>Features:</h4>
                    </div>
                    <div className="benifitsList">
                        <ul>
                            {cardArray[0].tenth.benifitsList.slice(0, showAllBenefits ? cardArray[0].tenth.benifitsList.length : maxVisibleBenefits).map((item, index) => (
                                <li style={{ listStyle: typeof item !== 'object' ? 'circle' : 'none', fontSize: '15px', marginBottom: '12px' }} key={index}>
                                    {typeof item === 'object' ? <h4 style={{ fontSize: '1.4rem' }}>{item.title}</h4> : item}
                                </li>
                            ))}
                            {cardArray[0].tenth.benifitsList.length > maxVisibleBenefits && (
                                <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }} onClick={handleReadMoreClick}>
                                    {showAllBenefits ? 'Read less' : 'Read more'}
                                </span>
                            )}
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    )
}

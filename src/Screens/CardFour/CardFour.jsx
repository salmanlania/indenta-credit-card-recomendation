import React, { useState } from 'react'

// Images

import cardFourImg from './cardFour.png'

// IMPORT ICONS
import { LiaPercentageSolid } from "react-icons/lia";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const cardArray = [{
    fourth: {
        benifitsList: [
            'Both UAE nationals and expats are eligible',
            'Applicant must have a debt service ratio below 50%',
            'Should have a good credit history',
            'Can avail cashback on purchases made using the card',
            'A minimum salary of AED 8,000 is required',
            {
                title: 'Benifits',
            },
            'No annual fees are charged for the first year later on AED 800 is charged',
            'Earn 10% cashback on retail categories like bills, supermarket, education, and transport',
            'Can earn up to 1% cashback on every AED 2 spent on other spendings',
            'Can get 50% OFF on 4 ticket bookings made at Vox, Novo, or Reel Cinemas',
            'Get 20% off on F&B at Reel Cinemas. T&Cs apply.',
            'Get 15% off on public session tickets at Dubai Ice Rink',
            'Can get 8 free visits to airport lounges worldwide via Lounge Key',
            'Can avail purchase protection and multi-trip travel protection',
            'Avail exclusive 2 for 1 benefits on Visa Entertainer App.',
            'Enjoy 4 complimentary rounds of Golf at Trump International Golf Club every month with a minimum spend of AED 7,500.',
            'Get an AED 1000 welcome bonus. The offer is valid up to 30 September 2023. T&Cs Apply.',
        ],
    }
}]

export default function CardFour() {
    const [showAllBenefits, setShowAllBenefits] = useState(false);
    const maxVisibleBenefits = 3;

    const handleReadMoreClick = () => {
        setShowAllBenefits(!showAllBenefits);
    };
    return (
        <div>
            <div className="firstCard" style={{ border: '1px solid black', width: '100%', maxWidth: '65em' }}>
                <section style={{ background: '#81D3E9', margin: '0', fontSize: '22px', fontWeight: 'bold', color: 'white' }}>
                    CBD Super Saver Credit Card
                </section>
                <section className='firstRow' style={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ marginTop: '13px' }} src={cardFourImg} alt="" />
                    </div>
                    <div className='others' style={{ margin: 0, padding: 0 }}>
                        <section className='otherPartOneRow' style={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginBottom: '-25px', gap: '18em' }}>
                            <div className='otherPartOneRowFirst' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><LiaPercentageSolid className='icon' /></li>
                                    <li>Interest Rate</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'fle' }}>
                                    <li>3.85%</li>
                                </ol>
                            </div>
                            <div className='otherPartOneRowTwo' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><AiOutlineMoneyCollect className='icon' /></li>
                                    <li>Minimum Salary</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li>AED 8K</li>
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
                                    <li>AED 0</li>
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
                                    <li>Yes</li>
                                </ol>
                            </div>
                        </section>

                    </div>
                </section>
                <section className='benifits'>
                    <div className="benifitsHeading" style={{ fontSize: '1.3rem', marginLeft: '2rem', marginBottom: '-22px', color: 'lightblue' }}>
                        <h4>Advantages</h4>
                    </div>
                    <div className="benifitsList" style={{ display: 'flex' }}>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>10% Cashback</li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>2 free valet parking</li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>50% OFF at VOX Cinemas</li>
                        </ul>
                    </div>
                </section>
                <section className='benifits'>
                    <div className="benifitsHeading" style={{ fontSize: '1.4rem', marginLeft: '2rem', marginBottom: '-22px' }}>
                        <h4>Features:</h4>
                    </div>
                    <div className="benifitsList">
                        <ul>
                            {cardArray[0].fourth.benifitsList.slice(0, showAllBenefits ? cardArray[0].fourth.benifitsList.length : maxVisibleBenefits).map((item, index) => (
                                <li style={{ listStyle: typeof item !== 'object' ? 'circle' : 'none', fontSize: '15px', marginBottom: '12px' }} key={index}>
                                    {typeof item === 'object' ? <h4 style={{ fontSize: '1.4rem' }}>{item.title}</h4> : item}
                                </li>
                            ))}
                            {cardArray[0].fourth.benifitsList.length > maxVisibleBenefits && (
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

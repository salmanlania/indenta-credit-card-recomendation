import React, { useState } from 'react'

// Images

import cardSixImg from './cardSix.png'

// IMPORT ICONS
import { LiaPercentageSolid } from "react-icons/lia";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const cardArray = [{
    sixth: {
        benifitsList: [
            'You can avail 4 supplementary cards with this card.',
            'Convenience to make your card payments in any of ADIB branches.',
            'Get instant SMS updates.',
            'High earning rewards program.',
            'This is an Islamic card.',
            'This card avails salary transfers.',
            'Get preferred rates from ADIB travel desk for airlines',
            'The Forex rate on this card is 2.3%',
            'Get a free grace period of 55 days to repay your outstanding balance.',
            'You can balance your transfer at the rate of 3% or AED 300.',
            'You need to pay an annual fee of AED 700 to avail this card.',
            {
                title: 'Benifits',
            },
            'You can receive service from ADIB travel desk',
            'You can redeem your Etihad guest miles for House Furnishing, Travel Bookings, Electronics and Gifts for Friends and Family.',
            'You can withdraw 100% of your finance limit for your need of cash.',
            'Avail advance technology of chip and pin for safe transactions.',
            'Free companion ticket voucher, which is not available on any other card.',
            'Fast track to Etihad guest gold tier.',
            'Free airport lounge access via lounge key.',
            'Valet parking at select locations.',
            'Free roadside assistance.',
            'Earn a welcome bonus of 50,000 Etihad guest miles.',
            'Receive 3 Guest mile up to 4 AED spent internationally.',
            'Receive up to 2.2 guest miles for every 4 AED spent on local transactions.',
            'You can even pay for your ADIB Etihad Guest covered card’s annual fees using 60, 600 Etihad guest miles.',
            'Get up to 70,000 Etihad Guest Miles on your new ADIB Etihad Guest Covered Card.Offer valid from 9th February to 6th​ April 2023.',
        ],
    }
}]

export default function CardSix() {
    const [showAllBenefits, setShowAllBenefits] = useState(false);
    const maxVisibleBenefits = 3;

    const handleReadMoreClick = () => {
        setShowAllBenefits(!showAllBenefits);
    };
    return (
        <div>
            <div className="firstCard" style={{ border: '1px solid black', width: '100%', maxWidth: '65em' }}>
                <section style={{ background: '#81D3E9', margin: '0', fontSize: '22px', fontWeight: 'bold', color: 'white' }}>
                    ADIB Etihad Guest Visa Platinum Card
                </section>
                <section className='firstRow' style={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ marginTop: '13px' }} src={cardSixImg} alt="" />
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
                                    <li>AED 700</li>
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
                    <div className="benifitsHeading" style={{ fontSize: '1.3rem', marginLeft: '2rem', marginBottom: '-22px', color: 'lightblue' }}>
                        <h4>Advantages</h4>
                    </div>
                    <div className="benifitsList" style={{ display: 'flex' }}>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>High benefits for travelers</li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>Get guest miles</li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>Free companion ticket</li>
                        </ul>
                    </div>
                </section>
                <section className='benifits'>
                    <div className="benifitsHeading" style={{ fontSize: '1.4rem', marginLeft: '2rem', marginBottom: '-22px' }}>
                        <h4>Features:</h4>
                    </div>
                    <div className="benifitsList">
                        <ul>
                            {cardArray[0].sixth.benifitsList.slice(0, showAllBenefits ? cardArray[0].sixth.benifitsList.length : maxVisibleBenefits).map((item, index) => (
                                <li style={{ listStyle: typeof item !== 'object' ? 'circle' : 'none', fontSize: '15px', marginBottom: '12px' }} key={index}>
                                    {typeof item === 'object' ? <h4 style={{ fontSize: '1.4rem' }}>{item.title}</h4> : item}
                                </li>
                            ))}
                            {cardArray[0].sixth.benifitsList.length > maxVisibleBenefits && (
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

import React, { useState } from 'react'

// Images

import cardSevenImg from './cardSeven.png'

// IMPORT ICONS
import { LiaPercentageSolid } from "react-icons/lia";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const cardArray = [{
    seventh: {
        benifitsList: [
            'This card is recognized over 32 million establishments.',
            'This card offers you benefits home and abroad.',
            'This card offers you a team of financial advisers and helps you achieve your financial goals.',
            'This bank offers you an instant credit card with an instant approval.',
            'This card also provides an instant limit approval.',
            'This card also offers 24 hour delivery of your card.',
            'Avail Flexi plus installment program with which you can avail 0% installment plans for purchases.',
            'The Forex rate stands at 2%',
            'You get an interest free period of up to 56 days.',
            'You require a minimum salary of AED 10,000 to be eligible for this card.',
            'You can transfer your balance at the rate of 0% for 6 months. There is a processing fee of 2.99% or AED 200, whichever is higher.',
            'There is no annual fee for this card. Note: Beginning from 15th November 2022, the Annual Percentage Rate on outstanding purchases and cash withdrawals on all HSBC credit cards will increase to 44.28%.',
            {
                title: 'Benifits',
            },
            'Avail 10% discount in on British Airways fares for flights from UAE to UK, Europe, USA and Canada.',
            'Access HSBC mobile app for more discounts and offers.',
            'Get exclusive offers on dining and shopping at 19000 outlets in 160 countries.',
            'Buy one get one free offers at VOX cinemas with this card.',
            'Enjoy 200 offers on Golf access programs across the MENA region.',
            'Avail purchase protection and extended warranty with this card.',
            'Avail Credit shield plus with this card.',
            'Avail supplementary cards with this card.',
            'Also avail Valet parking with this card.',
            'Enjoy airport dining at over 200 locations with this card and with the partnership of Dragonfly.',
            'Get up to AED 400 welcome bonus cashback on applying & Offer is valid only for primary cards. T&Cs Apply. The offer is valid up to 30 September 2023.',
            'Get up to 1 airmile for every AED 4 spent',
        ],
    }
}]

export default function CardSeven() {
    const [showAllBenefits, setShowAllBenefits] = useState(false);
    const maxVisibleBenefits = 3;

    const handleReadMoreClick = () => {
        setShowAllBenefits(!showAllBenefits);
    };
    return (
        <div>
            <div className="firstCard" style={{ border: '1px solid black', width: '100%', maxWidth: '65em' }}>
                <section style={{ background: '#81D3E9', margin: '0', fontSize: '22px', fontWeight: 'bold', color: 'white' }}>
                    HSBC Platinum Select Credit Card
                </section>
                <section className='firstRow' style={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ marginTop: '13px' }} src={cardSevenImg} alt="" />
                    </div>
                    <div className='others' style={{ margin: 0, padding: 0 }}>
                        <section className='otherPartOneRow' style={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginBottom: '-25px', gap: '18em' }}>
                            <div className='otherPartOneRowFirst' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><LiaPercentageSolid className='icon' /></li>
                                    <li>Interest Rate</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'fle' }}>
                                    <li>3.69%</li>
                                </ol>
                            </div>
                            <div className='otherPartOneRowTwo' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><AiOutlineMoneyCollect className='icon' /></li>
                                    <li>Minimum Salary</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li>AED 10K</li>
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
                            <li>1 air mile on 4 AED spent</li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>Buy 1 get 1 free offers</li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>Discounts at vox cinemas</li>
                        </ul>
                    </div>
                </section>
                <section className='benifits'>
                    <div className="benifitsHeading" style={{ fontSize: '1.4rem', marginLeft: '2rem', marginBottom: '-22px' }}>
                        <h4>Features:</h4>
                    </div>
                    <div className="benifitsList">
                        <ul>
                            {cardArray[0].seventh.benifitsList.slice(0, showAllBenefits ? cardArray[0].seventh.benifitsList.length : maxVisibleBenefits).map((item, index) => (
                                <li style={{ listStyle: typeof item !== 'object' ? 'circle' : 'none', fontSize: '15px', marginBottom: '12px' }} key={index}>
                                    {typeof item === 'object' ? <h4 style={{ fontSize: '1.4rem' }}>{item.title}</h4> : item}
                                </li>
                            ))}
                            {cardArray[0].seventh.benifitsList.length > maxVisibleBenefits && (
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

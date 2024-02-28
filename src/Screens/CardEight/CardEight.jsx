import React, { useState } from 'react'

// Images

import cardEightImg from './cardEight.png'

// IMPORT ICONS
import { LiaPercentageSolid } from "react-icons/lia";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const cardArray = [{
    eighth: {
        benifitsList: [
            'This card has a built in Nol Chip to make payments at RTA Parking Meters Metro.',
            'You can avail The NBD Installment plan with this card.',
            'Get Instant cash and flexible payment options with this card.',
            'Easy payment of utility bills with this card.',
            'Get 24 hour assistance and SMS alerts with this card.',
            'Get Instant purchase protection on your purchases and extended warranty.',
            'Special privileges and offers with this card.',
            'The foreign currency rate applicable on overseas transactions is {FX rate} and is a mark up over the Visa and MasterCard fee',
            'Up to 55 days interest free. Min repayment of 5% or AED 100 whichever is higher.',
            'You require a minimum salary of AED 10,000 per month to be eligible for this card',
            'BT available at 0.8% with a choice of 3-36 months',
            'There is AED 208.95 annual fee for this card.',
            {
                title: 'Benifits',
            },
            'This card provides the convenience to do Nol and Salik top up.',
            'You can save on movie tickets at VOX Cinemas for AED 40, instead of AED 70.',
            'Avail free Ferry rides at RTA Dubai Ferry.',
            'Avail complimentary life insurance of AED 75000.',
            'Get Bon Appetite Disount of 30% at over 2000 restaurants.',
            'Get 5% discount on Air tickets and 10 % discount on air tickets.',
            'Emergency cash and card replacement.',
            'International medical and travel assistance.',
            'Using this card become eligible for RTA monthly pass',
            'Access Gold Class on the Dubai Metro and pay your fare using your card',
            'Enjoy cashless payments using your smart phone or smart watch',
            'Get free life insurance facility',
            'Get lifestyle protector insurance which is available only for primary card holders.',
            'Emirates NBD Credit Card offers the New Credit Shield Pro feature includes',
            '- 0.99% on monthly fee on outstanding balance',
            '- Each card holder can get decease cover up to AED 300,000',
            '- In case of hospitalization get AED 100 pay out per day.T&Cs apply',
            'Plus Points can be redeemed for cashback',
            'By spending AED 200 you can earn 1 plus point.',
            'Earn 5 Plus Points for every AED 200 spend on weekends',
            'Earn 4 plus points for every AED 200 spend on RTA',
            'Earn 1 plus point for every AED 200 spend on weekdays',
        ],
    }
}]

export default function CardEight() {
    const [showAllBenefits, setShowAllBenefits] = useState(false);
    const maxVisibleBenefits = 3;

    const handleReadMoreClick = () => {
        setShowAllBenefits(!showAllBenefits);
    };
    return (
        <div>
            <div className="firstCard" style={{ border: '1px solid black', width: '100%', maxWidth: '65em' }}>
                <section style={{ background: '#81D3E9', margin: '0', fontSize: '22px', fontWeight: 'bold', color: 'white' }}>
                    Emirates NBD Go4it Platinum Card
                </section>
                <section className='firstRow' style={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ marginTop: '13px' }} src={cardEightImg} alt="" />
                    </div>
                    <div className='others' style={{ margin: 0, padding: 0 }}>
                        <section className='otherPartOneRow' style={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginBottom: '-25px', gap: '18em' }}>
                            <div className='otherPartOneRowFirst' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><LiaPercentageSolid className='icon' /></li>
                                    <li>Interest Rate</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'fle' }}>
                                    <li>3.25%</li>
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
                                    <li>AED 208</li>
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
                            <li>Discounts on movie tickets</li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>Free life insurance</li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <li><IoMdCheckmark className='icon' /></li>
                            <li>Buy 1-Get 1 free offers</li>
                        </ul>
                    </div>
                </section>
                <section className='benifits'>
                    <div className="benifitsHeading" style={{ fontSize: '1.4rem', marginLeft: '2rem', marginBottom: '-22px' }}>
                        <h4>Features:</h4>
                    </div>
                    <div className="benifitsList">
                        <ul>
                            {cardArray[0].eighth.benifitsList.slice(0, showAllBenefits ? cardArray[0].eighth.benifitsList.length : maxVisibleBenefits).map((item, index) => (
                                <li style={{ listStyle: typeof item !== 'object' ? 'circle' : 'none', fontSize: '15px', marginBottom: '12px' }} key={index}>
                                    {typeof item === 'object' ? <h4 style={{ fontSize: '1.4rem' }}>{item.title}</h4> : item}
                                </li>
                            ))}
                            {cardArray[0].eighth.benifitsList.length > maxVisibleBenefits && (
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

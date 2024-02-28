import React  , {useState} from 'react'

import cardOneImg from './cardOne.png'

// IMPORT ICONS
import { LiaPercentageSolid } from "react-icons/lia";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";

const cardArray = [{
    first: {
        benifitsList: [
            'Enjoy automatic Cashback on all spend with the Citi Cashback Credit Card',
            'Earn 3% cashback on non-AED spend, 2% cashback on grocery & supermarket spend and 1% on all other spend. No caps (up to monthly credit limit) , no minimum spend, no redemption process and no spend categories excluded.',
            'No annual fee in year 1. From year 2, annual fee is waived unless the annual spend is below AED 9,000, in which case a fee of AED 300 will apply',
            '2 complimentary airport rides per year (up to AED 110 each) using code "MAUAE2“ on the Careem app.',
            'Unlimited access to 1100+ lounges worldwide with MasterCard Travel Pass app.',
            'Get access to hundreds of Buy 1 Get 1 offer with the free Mastercard® priceless specials app',
            'Fast, safe and effortless purchases, with Apple Pay',
            'PayLite: turn any big purchases into small payments',
            'Citi World Privileges: Enjoy travel, dining and entertainment discounts locally and across 95 countries',
        ]
    },
}]

export default function CardOne() {
    const [showAllBenefits, setShowAllBenefits] = useState(false);
    const maxVisibleBenefits = 3;

    const handleReadMoreClick = () => {
        setShowAllBenefits(!showAllBenefits);
    };
  return (
    <div>
        <div className="firstCard" style={{ border: '1px solid black', width: '100%', maxWidth: '65em' }}>
                <section style={{ background: '#81D3E9', margin: '0', fontSize: '22px', fontWeight: 'bold', color: 'white' }}>
                    Citi Cashback Credit Card
                </section>
                <section className='firstRow' style={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ marginTop: '13px' }} src={cardOneImg} alt="" />
                    </div>
                    <div className='others' style={{ margin: 0, padding: 0 }}>
                        <section className='otherPartOneRow' style={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginBottom: '-25px', gap: '18em' }}>
                            <div className='otherPartOneRowFirst' style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                    <li><LiaPercentageSolid className='icon' /></li>
                                    <li>Interest Rate</li>
                                </ol>
                                <ol style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'fle' }}>
                                    <li>3.5 %</li>
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
                    <div className="benifitsHeading" style={{ fontSize: '1.4rem', marginLeft: '2rem', marginBottom: '-22px' }}>
                        <h4>Benefits:</h4>
                    </div>
                    <div className="benifitsList">
                        <ul>
                            {cardArray[0].first.benifitsList.slice(0, showAllBenefits ? cardArray[0].first.benifitsList.length : maxVisibleBenefits).map((item, index) => (
                                <li style={{ listStyle: 'circle', fontSize: '15px' }} key={index}>{item}</li>
                            ))}
                            {cardArray[0].first.benifitsList.length > maxVisibleBenefits && (
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

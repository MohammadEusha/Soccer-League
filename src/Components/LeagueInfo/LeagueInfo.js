import React, { useState } from 'react';
import maleImg from '../../Photo/Rectangle 28.png'
import femaleImg from '../../Photo/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMapMarker, faMars, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import facebookIcon from '../../Icon/Facebook.png'
import youtubeIcon from '../../Icon/YouTube.png'
import twitterIcon from '../../Icon/Twitter.png'
const LeagueInfo = (props) => {
    const { strLeague, intFormedYear, strCountry, strSport, strGender, strLogo, strBanner, strDescriptionEN, strFacebook, strYoutube, strTwitter } = props.league

    const [gender, setGender] = useState(false)


    let display;
    let showImage;
    let buttonText;
    if (gender) {
        display = <p className="card-text"><FontAwesomeIcon icon={faMars} /> Gender : Female</p>
        showImage = <img src={femaleImg} className='img-fluid rounded img-thumbnail' alt="..."></img>
        buttonText = <p>See Male Players <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
    }
    else {
        display = <p className="card-text"><FontAwesomeIcon icon={faMars} /> Gender : {strGender}</p>
        showImage = <img src={maleImg} className='img-fluid rounded img-thumbnail' alt="..."></img>
        buttonText = <p>See Female Players <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
    }


    return (
        <div style={{ backgroundColor: ' #282c34' }}>
            <header>
                <div >
                    <div>
                        <div className="card">
                            <img style={{ minHeight: '130px' }} src={strBanner} className="card-img" alt="..."></img>
                            <div className="card-img-overlay">
                                <img style={{ width: '300px', height: '100px' }} src={strLogo} className="img-fluid rounded mx-auto d-block" alt="..."></img>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
            <div className="mt-5 mb-3">
                <div >
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <div className="card mt-3 mb-3 text-white" style={{ maxwidth: "540px", maxHeight: "400px", backgroundColor: '#101a2b' }}>
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h3 className="card-title">{strLeague}</h3>
                                                <p className="card-text"><FontAwesomeIcon icon={faMapMarker} /> Founded : {intFormedYear}</p>
                                                <p className="card-text"><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>
                                                <p className="card-text"><FontAwesomeIcon icon={faFutbol} /> Sport Type : {strSport}</p>

                                                {display}

                                                <button style={{ width: '200px', height: '40px' }} onClick={() => setGender(!gender)} type="button" className="btn btn-secondary ">{buttonText}</button>
                                            </div>

                                        </div>
                                        <div className="col-md-6">

                                            {showImage}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-white mt-5 pt-5 pb-3">
                <p>{strDescriptionEN}</p>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer">
                        <img style={{ height: '50px' }} src={facebookIcon} alt="" />
                    </a>
                    <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer">
                        <img style={{ height: '50px' }} src={youtubeIcon} alt="" />
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer">
                        <img style={{ height: '50px' }} src={twitterIcon} alt="" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default LeagueInfo;
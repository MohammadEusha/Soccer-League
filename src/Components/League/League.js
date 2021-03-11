import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
const League = (props) => {
    const { idLeague, strLeague, strSport } = props.league

    const history = useHistory();

    const showDetails = idLeague => {
        const url = `league/${idLeague}`
        history.push(url)
    }

    const leagueStyle = {
        boxShadow: '10px 10px 5px  #101a2b',
        margin: '20px',
        borderRadius: '10px',
        height: '200px',
        width: '300px',
        float: 'left',
        backgroundColor: '#353e4d'
    }
    return (
        <div style={leagueStyle} className='card  text-white'>
            <div className="card-body pb-5">
                <h3> {strLeague}</h3>
                <p>Sports Type : {strSport}</p>
            </div>
            <div className='card-footer'>
                <button onClick={() => showDetails(idLeague)} type="button" class="btn btn-secondary">Explore <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
        </div>
    );
};

export default League;
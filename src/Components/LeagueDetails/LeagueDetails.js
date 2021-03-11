import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueInfo from '../LeagueInfo/LeagueInfo';

const LeagueDetails = () => {

    const { idLeague } = useParams()

    const [league, setLeague] = useState([])

    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues))
    }, [idLeague])
    return (
        <div>
            {
                league.map(league => <LeagueInfo league={league} key={league.idLeague}></LeagueInfo>)
            }
        </div>
    );
};

export default LeagueDetails;
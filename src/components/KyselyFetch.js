import React, { useState, useEffect } from 'react';
function KyselyFetch () {
const [tiedot, setTiedot] = useState([]);
const [teksti, setTeksti] = useState('Haetaan');
const fetchUrl = async () => {

try {
    let url = 'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaHospitalData';
    const response = await fetch(url);
    const json = await response.json();
    setTiedot(json.question);
    setTeksti('');
    console.log(json.question)

} catch (error) {
    setTeksti('Haku ei onnistunut');
}

}

useEffect( () => { fetchUrl(); }, [])

return ( <div>
    {
        tiedot.map( question => {
            if(question.id === "Finland")
            return ( 
                <div key ={ question.id}> <br/>
                    paska perse :D

                    </div>
            );
        })
    }
</div> 
);

}
export default KyselyFetch;
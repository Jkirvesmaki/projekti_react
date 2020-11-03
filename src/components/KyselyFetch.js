import React, { useState, useEffect } from 'react';
function KyselyFetch () {
const [tiedot, setTiedot] = useState([]);
const [teksti, setTeksti] = useState('Haetaan');

const fetchUrl = async () => {

try {
    let url = 'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaHospitalData';
    const response = await fetch(url);
    const json = await response.json();
    setTiedot(json.hospitalised);
    setTeksti('');
    console.log(json.hospitalised)

} catch (error) {
    setTeksti('Haku ei onnistunut');
}

}

useEffect( () => { fetchUrl(); }, [])

return ( <div>
    {
        tiedot.map( hospitalised => {
            if(hospitalised.area === "Finland")
            return ( 
                <div key ={ hospitalised.date}> <br/>
                    Päivä: {hospitalised.date.substring(0,10)}<br/> Paikka: {hospitalised.area}<br/>
                    Sairaalassa: {hospitalised.totalHospitalised}, joista osastolla {hospitalised.inWard}    &nbsp; 
                    ja tehohoidossa {hospitalised.inIcu} 

                    </div>
            );
        })
    }
</div> 
);

}
export default KyselyFetch;
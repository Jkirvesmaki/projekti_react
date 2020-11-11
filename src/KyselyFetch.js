import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import KyselyFetchApp from './KyselyFetchApp';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function KyselyFetch() {
  const [value, setValue] = React.useState('Kyllä');
  const [questions, setQuestions] = useState([]);
  const [teksti, setTeksti] = useState('Haetaan');

  const [kylla, setKylla] = useState('Haetaan');
  const [ei, setEi] = useState('Haetaan');


  const fetchUrl = async () => {

  try {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let targetUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/getquestions/'
    const response = await fetch(proxyUrl + targetUrl);
    const json = await response.json();
    setQuestions(json);
    
   
    setKylla(json.body[0])
    console.log(ei);
} catch (error) {
    setTeksti('Haku ei onnistunut');
}}

useEffect( () => { fetchUrl(); }, [])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (  <Grid container spacing={2}
    container
    direction="column"
    justify="center"
    alignItems="left"
  >
 
        {
        questions.map(question => {
          
  return(
            
        <FormControl component="fieldset">
        <FormLabel component="legend">{question.title}</FormLabel>
        <RadioGroup aria-label={question.title} name={question.title} value={question.title} onChange={handleChange}>
        
            <FormControlLabel
              value={question.body}
              control={<Radio />}
              label={question.body[0]}
             
            />
        <FormControlLabel
              value={question.body}
              control={<Radio />}
              label={question.body[1]}
             
            />


         
        </RadioGroup>
      </FormControl> 
     
          );
           
        })
      }


  <Button>submit</Button>
    
      </Grid>
  );

    }
export default KyselyFetch;
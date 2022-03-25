import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import About from "./About";
import Contact from './Contact';
import Projects from "./Projects"

export default function CenteredTabs() {
  const [value, setValue] = React.useState(<About/>);
  const handleChange = (event, newValue) => {
    console.log(newValue)
    if (newValue ===  1){
      console.log("two")
      setValue(<Projects/>)
    } else if (newValue ===  2){
      setValue(<Contact/>)
    }else{
      setValue(<About/>)
    }
  };

  return (
    <div>
    
      <Box sx={{ width: '100%', bgcolor: '#white' }}>
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="About" />
      <Tab label="Projects" />
      <Tab label="Contact" />
    </Tabs>
  </Box>
  
  <div className='box-container'>
    <div>{value}</div>
  
    </div>

  </div>
  );
}
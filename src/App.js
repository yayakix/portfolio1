import * as React from 'react';
import CenteredTabs from "./components/CenteredTabs"
import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {






    {/* dividing nav */}
    return  <div>
    <br/>
  <CenteredTabs/>
  <br/>
    <div className='box-container'>


  
    <br/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>About</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Skills</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>yeaLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida enim nec tempus venenatis. Donec eget dui nec leo lobortis faucibus vel non est. Aenean vel augue placerat dolor imperdiet lobortis in at justo. Cras lacinia arcu sem, eget ullamcorper lectus maximus at. In blandit tempus magna quis semper. Quisque eros sapien, rhoncus ac lorem vitae, consequat iaculis dui. Morbi varius dignissim sapien, sit amet accumsan ipsum eleifend ut. Nunc nibh risus, imperdiet quis volutpat sit amet, placerat in mauris.

Aenean sit amet ligula nibh. Nulla at sapien ac tortor mattis porta. Sed scelerisque odio a tellus porttitor euismod. Nunc imperdiet ligula nulla, quis rhoncus velit aliquam at. Vestibulum id porta orci. Maecenas blandit nibh at auctor rhoncus. Nunc tincidunt velit id accumsan pellentesque. Nulla ullamcorper mi ac aliquet maximus. Quisque elementum dapibus eros et fringilla. Integer feugiat nibh sed ligula gravida posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vel dignissim mauris. Duis pellentesque mauris risus, id dapibus ex venenatis eu. Integer vel eleifend quam. Fusce quis odio tempor, accumsan lectus quis, aliquet lorem.</Item>
        </Grid>
        
          <Grid item xs={6}>
          <Item>HTML <br/> CSS <br/>JAVASCRIPT <br/>NODE.JS <br/>JQUERY <br/>EXPRESS.JS <br/>REACT.JS <br/></Item>
        </Grid>
      
      </Grid>
    </Box>
    <br/>

    {/* seperation */}
    {/* <h1>Iyana Marquez</h1>
    <div className='aboutPGTitles'>
      <h2 className='aboutTitle'>About</h2> 
      
    </div>
    <img className='img' src='https://media.npr.org/assets/img/2017/04/25/istock-115796521_wide-2f8afeb04be5bf8290f13dd1a5a9e107f63ee2fd.jpg?s=1400' alt='profile-pic'></img>
      
    {/* this should wrap all non header contents */}
    {/* <h2 >Skills</h2>
            <table>
            <tr>
              <td> <li>HTML</li> </td>
              <td><li>CSS</li></td>
              <td><li>JQUERY</li></td>
            </tr>
            <tr>
              <td> <li>NODE.JS</li></td>
              <td> <li>EXPRESS.JS</li></td>
              <td><li>REACT.JS</li></td>
            </tr>
          </table> */} 
    </div>
      
    </div>
    
    
}


export default App;

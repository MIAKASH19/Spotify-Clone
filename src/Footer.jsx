import React from 'react'
import './Footer.css'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import VolumeDown from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeUp from '@mui/icons-material/VolumeUp';



const Footer = () => {

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className='footer'>

      <div className="footer-left">
          <img src="https://images.pexels.com/photos/4200745/pexels-photo-4200745.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='footer-albumlogo'/>
          <div className="footer-songinfo">
            <h4>Yeah!</h4>
            <p>Ushar</p>
          </div>
      </div>

      <div className="footer-center">
          <ShuffleOutlinedIcon className="footer-green" />
          <SkipPreviousIcon className="footer-icon" />
          <PlayCircleOutlinedIcon fontSize='large' className="footer-icon" />
          <SkipNextIcon className="footer-icon" />
          <RepeatOutlinedIcon className="footer-green" />
      </div>

      <div className="footer-right">

          <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <PlaylistPlayIcon />
              <VolumeUp />
              <Slider aria-label="Volume" value={value} onChange={handleChange} />
            </Stack>
          </Box>

      </div>
    </div>
  )
}

export default Footer

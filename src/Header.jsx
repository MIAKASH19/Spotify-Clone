import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/SearchOutlined'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import { useDataLayerValue } from './DataLayer';


    

const Header = () => {

    const [{user}, dispatch] = useDataLayerValue()

  return (
    <div className='header'>

      <div className="header-left">
        <SearchIcon />
        <input 
            placeholder="Search for songs, Artist , Album"
            type="text"
        />
      </div>

      <div className="header-right">
        <Stack direction="row" spacing={2}>
            <Avatar src={user?.images[0]?.url} sx={{ bgcolor: green[500] }}>MI</Avatar>
        </Stack>
        <h4>{user?.display_name}</h4>
      </div>

    </div>
  )
}

export default Header

import React from 'react'
import "./Sidebar.css"
import { useDataLayerValue } from './DataLayer' 
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue()
  return (
    <div className='sidebar'>
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" className="sidebar-logo" />

      <SidebarOption Icon={HomeOutlinedIcon} title="Home"/>
      <SidebarOption Icon={SearchOutlinedIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library"/>
      <br />
        <strong className='sidebar-title'>PLAYLIST</strong>
      <hr />

      {playlists?.items?.map((playlists) => (
        <SidebarOption key={playlists.name} title={playlists.name} />
      ))}
    </div>
  )
}

export default Sidebar

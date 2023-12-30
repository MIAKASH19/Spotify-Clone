import React from 'react'
import "./Body.css"
import Header from './Header'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDataLayerValue } from './DataLayer';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from './SongRow';

const Body = ({spotify}) => {

  const [{discover_weekly}, dispatch] = useDataLayerValue()
                            
  return (
    <div className='body'>
      <Header spotify={spotify}/>

      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body-infotext">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleIcon
            className="body-shuffle"
            // onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}

      </div>
    </div>
  )
}

export default Body

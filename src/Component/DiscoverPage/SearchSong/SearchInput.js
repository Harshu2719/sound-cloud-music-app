import React, {useState} from 'react'
import SearchBarComponent from './SearchBarButton';

const SearchInput = () => {
    
    const [songNameTitle, setSongNameTitle] = useState();

    const styleInput = {
        display: 'inline-block',
        background: '#f2f2f2',
        padding: '16px',
        height: '28px',
        border: 'none',
        borderRadius: '4px',
        color: '#666',
        outline: '0',
        border: '0',
        padding: '5px 7px',
        background: '#e5e5e5',
        width: '100%',
       

    }
    const style = {
        margin: '49px 0 12px',
        padding: '9px 10px 8px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        minWidth: '125px'
    }
  return (
    <div style={style}>
        <input style={styleInput} type='text' onChange={e => {setSongNameTitle(e.target.value)}} placeholder='search ' />
        <SearchBarComponent songNameTitle={songNameTitle} />
    </div>
  )
}

export default SearchInput;
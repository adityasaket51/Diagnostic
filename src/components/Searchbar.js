import React from 'react'

const Searchbar = () => {
  return (
    <div className='searchbarContainer'>
        <div>
            <select name="location" id="" className='searchSelect'>
                <option value="Madhapur"><strong>Madhapur</strong></option>
            </select>
        </div>
        <div>
            <input type="text" placeholder='Search for lab tests or health packages' className='searchInput'/>
        </div>
        <div>
            <button type='button' className='btn btn-info'>Search</button>
        </div>
    </div>
  )
}

export default Searchbar
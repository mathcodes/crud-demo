import React from 'react'

function Header() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your age" />
        <input type="text" placeholder="Enter your favorite number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Header;

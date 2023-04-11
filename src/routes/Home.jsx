
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

function Home() {

    return (
      <div className="App">
          <h1>Home Page</h1>
          <form>
                    <label for="search">Search by text:</label>
                    <input type="text" name="search" value="pending"/>
                    <br/>
                    <br/>
                    <label for="">Sort by: </label>
                    <br/>
                    <input type="radio" name="createDate"/>
                    <label for="createDate">Creation Date</label>

                    <br/>
                    <input type="radio" name="likes"/>
                    <label for="likes">Likes</label>
            </form>
            
      </div>
    )
  }
  
  export default Home
  
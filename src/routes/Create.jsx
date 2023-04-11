
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

function Create() {

    return (
      <div className="App">
          <h1>Create a new item</h1>
            <form>
            <label for="title">Title</label>
            <br />
            <input type="text" name="title" value="pending"/>
            <br />
            <label htmlFor="desc">Description</label>
            <br />
            <textarea type="text" name="desc" value="pending"/>
            <br />
            <label htmlFor="priority">Choose a priority</label>
            <select name="priority">
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option selected value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="Backlog">Backlog</option>
            </select>
            </form>            
      </div>
    )
  }
  
  export default Create
  
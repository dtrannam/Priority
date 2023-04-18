
import { useState, useEffect  } from 'react'
import { useRoutes } from 'react-router-dom'
import { supabase } from '../client'
import moment from 'moment';

function Create() {
    const [task, setTask] = useState(
        {title: "", 
        description: "",
        priority: "Medium"
        // date: ""
        }
    )
    
    // set default value to cur date
    // useEffect(()=> {
    //   // Date object
    //   const date = new Date();
    //   let currentDay= String(date.getDate()).padStart(2, '0');
    //   let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    //   let currentYear = date.getFullYear();
    //   // we will display the date as DD-MM-YYYY
    //   let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    //   console.log("The current date is " + currentDate);
    //   setTask(task, task[date] = currentDate)
    // }, [])

    const onValueChange = (e) => {
      const {name, value} = e.target
        // if (name == "date") {
        //   let newDate = new Date(value);
        //   console.log(value.valueAsDate)
        //   setTask ((prev) => {
        //     return {
        //       ...prev,
        //       [name]: newDate
        //     }
        //   })
        // } else {
        setTask ((prev) => {
            return {
              ...prev,
              [name]: value
            }
          })
        console.log(task)
    }

    const createTask = async(event) => {
      event.preventDefault()
      console.log(task)
      try {
        const { data, error } = await supabase
        .from('Tasks')
        .insert({title: task.title, description: task.description, priority: task.priority})
        .select()
        // window.location = "/"
      } catch (error) {
        console.log(error.message)
      }
      
    }

    return (
      <div className="App">
          <h1>Create a new item</h1>
            <form>
            <label for="title">Task</label>
            <br />
            <input required type="text" name="title" value={task.title} onChange={onValueChange}/>
            <br />
            <label htmlFor="desc">Description</label>
            <br />
            <textarea required type="text" name="description" value={task.description} onChange={onValueChange}/>
            <br />
            <label htmlFor="priority">Choose a priority:</label>
            <select name="priority" value={task.value} onChange={onValueChange}>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option selected value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="Backlog">Backlog</option>
            </select>
            <br />
            {/* <label htmlFor="priority">Choose a Goal Date:</label>
            <input type="date" name="date" value={task.date} onChange={onValueChange}/> */}
            <input  type="submit" value="Submit" onClick={createTask} />
            </form>            
      </div>
    )
  }
  
  export default Create
  
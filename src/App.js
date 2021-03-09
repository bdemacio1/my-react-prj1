import {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';



function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appt',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 8th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 9th at 3:30pm',
        reminder: false
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('deleted: ', id);
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
      // tasks.forEach((task) => {
      //   if(task.id == id)
      //     task.reminder = !task.reminder;
      // })
    )
    console.log(id)
  }
  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>



        <Route path='/' exact render={(props) => (
          <>
            {showAddTask ? <AddTask onAdd={addTask}/>: ''}
        
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          </>
        )}/>
        
        <Route path='/about' component={About}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

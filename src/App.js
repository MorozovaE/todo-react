import './App.css';
import Header from './components/Header';
import WeekPanel from './components/WeekPanel';
import { TaskList } from './models/TaskList';
// import {Task} from './models/Task'
import Tasks from './components/Tasks';
// 1 todoModel
// 2 todoModel context

function App() {

  let tasks = new TaskList();

  return (
    <div className="App">
      <Header />
      <main>
        <WeekPanel />
        <Tasks/>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import WeekPanel from './components/WeekPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WeekPanel />
        <TaskList />
      </main>
    </div>
  );
}

export default App;

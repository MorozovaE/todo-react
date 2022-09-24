import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import WeekPanel from './components/WeekPanel';
import TestTabs from './components/test/TestTabs';

// 1 todoModel
// 2 todoModel context

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WeekPanel />
        <TaskList />
        {/* <TestTabs/> */}
      </main>
    </div>
  );
}

export default App;

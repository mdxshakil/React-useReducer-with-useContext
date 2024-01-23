import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import TaskContextProvider from "./contexts/TaskContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="parent">
        <h1>Tasks to complete</h1>
        <TaskContextProvider>
          <AddTask />
          <TaskList />
        </TaskContextProvider>
      </div>
    </div>
  );
};

export default App;




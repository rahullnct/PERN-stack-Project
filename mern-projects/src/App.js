
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import  from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import Layout from './Components/Layout';
import TaskDetails from './Pages/TaskDetails';
import ProjectDetail from './Pages/ProjectDetail';
import Projects from './Pages/Projects';
import Team from './Pages/Team';
import Accurate_task from './Components/Accurate_task';
function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/task-details' element={<TaskDetails/>}/>
      <Route path='project-details' element={<ProjectDetail/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='project' element={<Projects/>}/>
      <Route path='/accurate_task_detail/:id' element={<Accurate_task/>}/>
      {/* <Route path='/settings' element={}/> */}
      </Route>
    </Routes>
  );
}

export default App;

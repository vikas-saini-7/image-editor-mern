import './App.css';
import EditorLayout from './pages/editor/EditorLayout';
import EditorPage from './pages/editor/EditorPage';
import HomePage from './pages/home/HomePage';
import {createBrowserRouter} from 'react-router-dom'
import { tools } from './constants';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "editor",
    element: <EditorPage/>
  },
])

function App() {
  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;

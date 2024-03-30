import './App.css';
import EditorLayout from './pages/editor/EditorLayout';
import EditorPage from './pages/editor/EditorPage';
import HomePage from './pages/home/HomePage';
import {createBrowserRouter} from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "editor",
    element: <EditorPage/>,
    children: [

    ]
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

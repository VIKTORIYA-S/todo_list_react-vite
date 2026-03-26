import { StrictMode } from 'react'
import  ReactDom  from 'react-dom/client'
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { ToDoListPage } from './pages/ToDoListPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoListPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <ToDoListPage />
//     </BrowserRouter>
//   </StrictMode>,
// )

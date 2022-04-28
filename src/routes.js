import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact'
export default routes = {
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route/>
    </Routes>
}
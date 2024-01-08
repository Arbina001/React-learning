import './AP.css';
import { Basicc } from './learnreact/example';
import { Filters } from './learnreact/filterexample';
import { Basic } from './learnreact/learning';
import { Rendar } from './learnreact/rendaring';
import {Example} from './learnreact/secondhooks';
import {Usehook} from './learnreact/useeffect';
import {Gallery} from './learnreact/hooksfromdoc';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './routes/homepage';
import { Aboutpage } from './routes/aboutpage';
// import { Statebutton } from './learnreact/statehooks';
import {Nvbarpage} from '../src/routes/navbar' ;

function App() {
  return (
    <>
    <Nvbarpage/>
   {/* <Statebutton/> */}
    {/* <Example/> */}
    {/* <Usehook/> */}
    {/* <Gallery/> */}
    <Routes>
<Route path='/' element={<Homepage/>}></Route>

<Route path='about' element={<Aboutpage/>}></Route>

    </Routes>
    </>
  );
}

export default App;

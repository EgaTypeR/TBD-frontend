import React, {Fragment} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

//components
import NavBar from './components/navBar';
import SqlBuild from './components/sqlBuilder';
import TableBook from './components/bookTable';
import TableLanguage from './components/languageTable';
import TablePublisher from './components/publisherTable';

function App() {
  return (
    <Fragment>
      
      <div className='container'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<TableBook></TableBook>}></Route>
        <Route path='/book' element={<TableBook></TableBook>}></Route>
        <Route path='/language' element={<TableLanguage></TableLanguage>}></Route>
        <Route path='/publisher' element={<TablePublisher></TablePublisher>}></Route>
        <Route path='/sql-builder' element={<SqlBuild></SqlBuild>}></Route>
      </Routes>
      </div>
    </Fragment>
  );
}

export default App;

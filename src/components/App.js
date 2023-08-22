
import { useState } from 'react';
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs'
const App = () => {
  let tabs=[{titles:'1',content:'Tab 1'},{titles:'2',content:'Tab 2'},{titles:'3',content:'Tab 3'}]
  let [tab,Settab]= useState('Tab 1')
  function changetab(data){
    Settab(data)
  }
  return (
    <div>

        {<Tabs tabs={tabs} onclick={changetab}/>}
        {tab && <div>This is the content for {tab}.</div>}
    </div>
  )
}

export default App

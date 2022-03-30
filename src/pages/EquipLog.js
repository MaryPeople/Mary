import React, { useState, useEffect } from 'react'
import EquipAdder from '../components/EquipLog/EquipAdder';
import { EquipProvider } from '../components/EquipLog/EquipContext';
import EquipHeader from '../components/EquipLog/EquipHeader';
import EquipItems from '../components/EquipLog/EquipItems';
// import axios from 'axios';

export default function EquipLog() {
  const [equips, setEquips] = useState([
    {
      eqid: '38884772723',
      name: 'XLR',
      cnt: 4,
      desc: ''
    },
    {
      eqid: '451182349823',
      name: 'DMX',
      cnt: 2,
      desc: ''
    },
    {
      eqid: '7272311111',
      name: '인터콤',
      cnt: 1,
      desc: ''
    }
  ]);

  // const fetchEquips = () => {
  //   axios({
  //     url: 'http://127.0.0.1:8000/equips',
  //     method: 'get',
  //   })
  //   .then(function a(response) { 
  //     console.log(response) 
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
  
  // useEffect(()=>{
  //   fetchEquips();
  // }, [])

  return (
    <EquipProvider value={[equips, setEquips]}>
      <EquipHeader/>
      <EquipAdder/>
      <EquipItems/>
    </EquipProvider>
  )
}

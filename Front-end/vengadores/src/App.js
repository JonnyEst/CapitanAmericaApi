import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import PatrocinadoresList from './components/PatrocinadoresList'
import PatrocinadoresForm from './components/PatrocinadoresForm'
import AliadosList from './components/AliadosList'
import AliadosForm from './components/AliadosForm'
import CompañerosList from './components/CompañerosList'
import CompañerosForm from './components/CompañerosForm'

function App() {

  const [compañero, setCompañero] = useState({
    nombre: ''
  }) 

  const [aliado, setAliado] = useState({
    nombre: ''
  }) 

  const [patrocinador, setPatrocinador] = useState({
    nombre: ''
  })

  const [compañeros, setCompañeros] = useState([])

  const [aliados, setAliados] = useState([])

  const [patrocinadores, setPatrocinadores] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getCompañeros = () => {
      fetch('http://localhost:3200/api/companeros')
      .then(res => res.json())
      .then(res => setCompañeros(res))
    }
    getCompañeros()
    setListUpdated(false)
  }, [listUpdated])

  useEffect(() => {
    const getAliados = () => {
      fetch('http://localhost:3200/api/aliados')
      .then(res => res.json())
      .then(res => setAliados(res))
    }
    getAliados()
    setListUpdated(false)
  }, [listUpdated])

  useEffect(() => {
    const getPatrocinadores = () => {
      fetch('http://localhost:3200/api/patrocinadores')
      .then(res => res.json())
      .then(res => setPatrocinadores(res))
    }
    getPatrocinadores()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Captain App'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Patrocinadores List</h2>
            <PatrocinadoresList patrocinador={patrocinador} setPatrocinador={setPatrocinador} patrocinadores={patrocinadores} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Patrocinador Form</h2>
            <PatrocinadoresForm patrocinador={patrocinador} setPatrocinador={setPatrocinador}/>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <hr></hr>
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Aliados List</h2>
            <AliadosList aliado={aliado} setAliado={setAliado} aliados={aliados} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Aliados Form</h2>
            <AliadosForm aliado={aliado} setAliado={setAliado}/>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <hr></hr>
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Compañeros List</h2>
            <CompañerosList compañero={compañero} setCompañero={setCompañero} compañeros={compañeros} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Compañeros Form</h2>
            <CompañerosForm compañero={compañero} setCompañero={setCompañero}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
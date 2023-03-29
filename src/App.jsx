import './App.css'
import NavBar from './assets/components/NavBar'
import Principal from './assets/components/Principal'
import logoEspam from './photos/archivos para la pagina web ESPAM/logoEspam.png'
import campusPolitecnico from './photos/archivos para la pagina web ESPAM/campusPolitecnico.jpg'
import imgFounder from './photos/archivos para la pagina web ESPAM/ManuelFelixLopez.png'
import logoUser from './photos/archivos para la pagina web ESPAM/usuario.png'
import ValuesHuman from './assets/components/ValuesHuman'
import commitment from './photos/archivos para la pagina web ESPAM/apreton-de-manos.png'
import security from './photos/archivos para la pagina web ESPAM/proteger (1).png'
import trust from './photos/archivos para la pagina web ESPAM/confiar.png'
import honesty from './photos/archivos para la pagina web ESPAM/honesto.png'
import responsibility from './photos/archivos para la pagina web ESPAM/responsabilidad.png'
import environment from './photos/archivos para la pagina web ESPAM/salve-el-planeta.png'
import impulse from './photos/archivos para la pagina web ESPAM/impulsar.png'
import menu from './photos/archivos para la pagina web ESPAM/menu.png'
import SliderCareers from './assets/components/SliderCareers'
import agricola from './photos/archivos para la pagina web ESPAM/agricola.png'
import agroforestal from './photos/archivos para la pagina web ESPAM/agroforestal.png'
import agroindustria from './photos/archivos para la pagina web ESPAM/agroindustria.png'
import ambiente from './photos/archivos para la pagina web ESPAM/ambiente.png'
import computacion from './photos/archivos para la pagina web ESPAM/computacion.png'
import electronica from './photos/archivos para la pagina web ESPAM/electronica.png'
import empresas from './photos/archivos para la pagina web ESPAM/empresas.png'
import publica from './photos/archivos para la pagina web ESPAM/publica.png'
import riesgos from './photos/archivos para la pagina web ESPAM/riesgos.png'
import turismo from './photos/archivos para la pagina web ESPAM/turismo.png'
import veterinaria from './photos/archivos para la pagina web ESPAM/veterinaria.png'
import flecha from './photos/archivos para la pagina web ESPAM/flecha.png'


function App() {

  return (
    <div className="App">
      <NavBar logoEspam={logoEspam} logoUser={logoUser} menu={menu} />
      <Principal logoEspam={logoEspam} campusPolitecnico={campusPolitecnico} imgFounder={imgFounder} />
      <ValuesHuman commitment={commitment} security={security} trust={trust} honesty={honesty} responsibility={responsibility} environment={environment} impulse={impulse} />
      <SliderCareers agricola={agricola} agroforestal={agroforestal} agroindustria={agroindustria} ambiente={ambiente}  computacion={computacion} empresas={empresas} publica={publica} riesgos={riesgos} turismo={turismo} veterinaria={veterinaria} flecha={flecha}
       />
    </div>
  )
}

export default App

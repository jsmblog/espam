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


function App() {

  return (
    <div className="App">
      <NavBar logoEspam={logoEspam} logoUser={logoUser} menu={menu} />
      <Principal logoEspam={logoEspam} campusPolitecnico={campusPolitecnico} imgFounder={imgFounder} />
      <ValuesHuman commitment={commitment} security={security} trust={trust} honesty={honesty} responsibility={responsibility} environment={environment} impulse={impulse} />
    </div>
  )
}

export default App

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
import Rules from './assets/components/Rules'
import admision from './photos/archivos para la pagina web ESPAM/admision.png'
import reglamentacion from './photos/archivos para la pagina web ESPAM/reglamentacion.png'
import transparencia from './photos/archivos para la pagina web ESPAM/transparencia.png'
import merecer from './photos/archivos para la pagina web ESPAM/merecer.png'
import mapa from './photos/archivos para la pagina web ESPAM/mapa.png'
import biblioteca from './photos/archivos para la pagina web ESPAM/biblioteca.png'
import facebook from './photos/archivos para la pagina web ESPAM/facebook.png'
import twiter from './photos/archivos para la pagina web ESPAM/twiter.png'
import youtube from './photos/archivos para la pagina web ESPAM/youtube.png'
import instagram from './photos/archivos para la pagina web ESPAM/instagram.png'
import flickr from './photos/archivos para la pagina web ESPAM/flickr.png'
import noticias from './photos/archivos para la pagina web ESPAM/noticias.png'
import Contacts from './assets/components/Contacts'
import News from './assets/components/News'
import img1 from './photos/archivos para la pagina web ESPAM/img1.png'
import img2 from './photos/archivos para la pagina web ESPAM/img2.png'
import img3 from './photos/archivos para la pagina web ESPAM/img3.png'
import img4 from './photos/archivos para la pagina web ESPAM/img4.png'
import img5 from './photos/archivos para la pagina web ESPAM/img5.png'
import campusImg from './photos/archivos para la pagina web ESPAM/campus.jpg'
import nacido from './photos/archivos para la pagina web ESPAM/nacido.png'
import gerente from './photos/archivos para la pagina web ESPAM/gerente.png'
import alcalde from './photos/archivos para la pagina web ESPAM/alcalde.png'
import vicepresidente from './photos/archivos para la pagina web ESPAM/vicepresidente.png'
import tumba from './photos/archivos para la pagina web ESPAM/tumba.png'
import cerrar from './photos/archivos para la pagina web ESPAM/cerrar.png'
import touch from './photos/archivos para la pagina web ESPAM/touch.png'
function App() {

  return (
    <div className="App">
      <NavBar logoEspam={logoEspam} logoUser={logoUser} menu={menu} />
      <Principal cerrar={cerrar} nacido={nacido} gerente={gerente} alcalde={alcalde} vicepresidente={vicepresidente} tumba={tumba} campusImg={campusImg} logoEspam={logoEspam} campusPolitecnico={campusPolitecnico} imgFounder={imgFounder} />
      <ValuesHuman  commitment={commitment} security={security} trust={trust} honesty={honesty} responsibility={responsibility} environment={environment} impulse={impulse} />
      <News noticias={noticias} img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} />
      <SliderCareers touch={touch} agricola={agricola} agroforestal={agroforestal} agroindustria={agroindustria} ambiente={ambiente}  computacion={computacion} electronica={electronica} empresas={empresas} publica={publica} riesgos={riesgos} turismo={turismo} veterinaria={veterinaria} flecha={flecha}
       />
       <Rules admision={admision} reglamentacion={reglamentacion} transparencia={transparencia} merecer={merecer} biblioteca={biblioteca} />
       <Contacts mapa={mapa} facebook={facebook} twiter={twiter} instagram={instagram} flickr={flickr} youtube={youtube}  />
    </div>
  )
}

export default App

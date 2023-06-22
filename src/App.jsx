
import './App.css'
import {useState, useEffect} from 'react'
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  'swiper/css/scrollbar';
import  {Swiper, SwiperSlide} from 'swiper/react';


function App() {

  const [slidesPerView, setSlidesPerview] = useState(2)

  const data = [
    {id: '1', image: 'https://criticalhits.com.br/wp-content/uploads/2019/02/tobi-uchiha-obito-32599615-1280-720.jpg'},
    {id: '2', image: 'https://img.ibxk.com.br/2021/11/11/11154722570441.jpg?ims=328x'},
    {id: '3', image: 'https://cdn.ome.lt/u2DIpHvXxdW1owOiDVlrhr4jGUs=/fit-in/837x500/smart/uploads/conteudo/fotos/Naruto_Kisame.png'},
    {id: '4', image: 'https://img.quizur.com/f/img606c9e5b3b55a5.89605610.jpg?lastEdited=1617731266'},
    {id: '5',  image: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2021/11/legiao_r2HwZV9sbzMT.jpg.webp'},
    {id: '6',  image: 'https://64.media.tumblr.com/ae621df54a23fe7f61f8b10aa5392c0d/79601e3a67895257-87/s1280x1920/fccc81f2fed4a8bbe9c55688676b18f3e6cc67c2.jpg'},
    {id: '7',  image: 'https://nerdhits.com.br/wp-content/uploads/2021/12/Naruto-Deidara-Grinning.jpg'},
    {id: '8',  image: 'https://s.aficionados.com.br/imagens/zetsu_cke.jpg'},
    {id: '9',  image: 'https://pm1.aminoapps.com/6347/4a08607268b0c35fd669f88dfb82c502465c1f73_00.jpg'},
    {id: '10',  image: 'https://otakukart.com/wp-content/uploads/2021/12/konan.jpg'},
  ]

  useEffect(() => {
       function headeResise() {
        if(window.innerWidth < 720){
          setSlidesPerview(1);
        }else{
          setSlidesPerview(2);
        }
       }

       headeResise();
       window.addEventListener('resize', headeResise)

       return () => {
        window.removeEventListener("resize", headeResise)
       }
  }, [])

  return (
    <div className='container'>
      <h1 className="title">Slide com react-JS</h1>

      <Swiper
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      navigation

      >
        {data.map( (item) =>(
          <SwiperSlide key={item.id}>
            <img src={ item.image }
             alt="slider" 
             className='slide-iten' />
          </SwiperSlide>
          
        ))}
        
      </Swiper>
      
    </div>

  )
}

export default App

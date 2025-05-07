import { useState } from 'react';

export default function WhoWeAre() {

  const [ selectedSection, setSelectedSection ] = useState<'who' | 'mision' | 'vision'>('who');

  const sections = {
    'who': {
      title: 'Quiénes somos',
      text: 'Somos un grupo de personas comprometidas con el bienestar de los gatos en situación de vulnerabilidad. Nuestra misión es rescatar, cuidar y brindar una segunda oportunidad a felinos que han sido abandonados, maltratados o que padecen enfermedades graves.'
    },
    'mision': {
      title: 'Misión',
      text: 'Somos una fundación dedicada a proteger y sanar a gatos que enfrentan enfermedades y situaciones de abandono. Trabajamos con amor y compromiso para ofrecer atención médica, refugio seguro y una nueva oportunidad de vida a cada felino que rescatamos.'
    },
    'vision': {
      title: 'Visión',
      text: 'Aspiramos a un mundo donde todos los gatos enfermos reciban el cuidado, la atención médica y la dignidad que merecen. Soñamos con comunidades más conscientes, solidarias y responsables, donde cada felino vulnerable encuentre un hogar lleno de amor, respeto y protección.'
    },
  };
  
  return (
    <section id='WhoWeAre' className='grid lg:grid-cols-2 mt-10 scroll-mt-74'>

      <div className='lg:bg-[#f0f0f0] w-full lg:w-fit h-fit mx-auto flex lg:flex-col gap-3 p-4 rounded-xl'>
        <button className={`grow sm:flex-1 lg:w-[330px] text-lg lg:px-3 py-2 lg:py-3 rounded-lg lg:rounded-xl cursor-pointer transition-all duration-400 ${ selectedSection === 'who' ? 'bg-[#1228f9] hover:bg-[#2b40ff] text-white' : 'bg-[#e2e2e2] hover:bg-[#d5d5d5]' }`} onClick={ () => setSelectedSection('who') } >Quienes somos</button>
        <button className={`grow sm:flex-1 lg:w-[330px] text-lg lg:px-3 py-2 lg:py-3 rounded-lg lg:rounded-xl cursor-pointer transition-all duration-400 ${ selectedSection === 'mision' ? 'bg-[#1228f9] hover:bg-[#2b40ff] text-white' : 'bg-[#e2e2e2] hover:bg-[#d5d5d5]' }`} onClick={ () => setSelectedSection('mision') } >Mision</button>
        <button className={`grow sm:flex-1 lg:w-[330px] text-lg lg:px-3 py-2 lg:py-3 rounded-lg lg:rounded-xl cursor-pointer transition-all duration-400 ${ selectedSection === 'vision' ? 'bg-[#1228f9] hover:bg-[#2b40ff] text-white' : 'bg-[#e2e2e2] hover:bg-[#d5d5d5]' }`} onClick={ () => setSelectedSection('vision') } >Vision</button>
      </div>

      <div className='mt-5 lg:mt-0 px-10 '>
        <h2 className='text-4xl text-center lg:text-left'>{sections[selectedSection].title}</h2>
        <p className='mt-5 text-center lg:text-left'>{sections[selectedSection].text}</p>
        <img src="quienes-somos.jpg" alt="Gato en veterinaria" className='mt-5 lg:mt-3' />
      </div>

    </section>
  )
}


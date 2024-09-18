import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export default function Questions() {

   const [card1, setCard1] = useState(false);
   const [card2, setCard2] = useState(false);
   const [card3, setCard3] = useState(false);
   const [card4, setCard4] = useState(false);
   const [card5, setCard5] = useState(false);

   const Active = "!bg-transparent !text-white border-white border-[2px]"
   const Inactive = "bg-white text-blackB"

   return (
      <div className='grid gap-[10px]'>
         <Accordion
            onChange={() => setCard1(!card1)}
            className={`!rounded-[16px] ${card1 ? Active : Inactive}`}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1-content"
               id="panel1-header"
            >
               <h4 className={`${card1 ? "text-white" : "text-purpleB"}`}>
                  ¿Cómo puedo comprar productos usando los cronos en la App del Banco del Saber?
               </h4>
            </AccordionSummary>
            <AccordionDetails>
               <>
                  <h5>Reservación:</h5>
                  <p className="p5">Reserva tus productos en la tienda virtual por 1 o 2 semanas hasta que puedas juntar los Cronos necesarios para comprarlo.</p>
                  <br />
                  <h5>Compra directa:</h5>
                  <p className="p5">Encuentra el producto que deseas y cómpralo con los cronos.</p>
                  <br />
                  <h5>Compra mixta:</h5>
                  <p className="p5">Compras tus productos con 75% Cronos y el otro 25% en tu moneda local.</p>
               </>
            </AccordionDetails>
         </Accordion>
         <Accordion
            onChange={() => setCard2(!card2)}
            className={`!rounded-[16px] ${ card2 ? Active : Inactive}`}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel2-content"
               id="panel2-header"
            >
               <h4 className={`${ card2 ? "text-white" : "text-purpleB"}`}>
                  ¿Cómo puedo realizar una donación para apoyar al Banco del Saber?
               </h4>
            </AccordionSummary>
            <AccordionDetails>
               <ul className='list-disc ml-[25px]'>
                  <li className="p5">Donaciones en efectivo de personas naturales o empresas. </li>
                  <li className="p5">Donaciones productos de personas naturales o empresas: Productos de primera necesidad como alimentos, ropa, electrónicos, objetos de utilidad.</li>
                  <li className="p5">Donación en suscripciones a colegio y o personas de bajos recursos.</li>
                  <li className="p5">Cada 3 meses se publica el estado de cuenta de las donaciones.</li>
               </ul>
            </AccordionDetails>
         </Accordion>
         <Accordion
            onChange={() => setCard3(!card3)}
            className={`!rounded-[16px] ${card3 ? Active : Inactive}`}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1-content"
               id="panel1-header"
            >
               <h4 className={`${card3 ? "text-white" : "text-purpleB"}`}>
                  ¿Qué juegos lúdicos educativos puedo encontrar en la aplicación?
               </h4>
            </AccordionSummary>
            <AccordionDetails>
               <p className='p5'>
                  Desde los 7 años, en BDS aprender es un juego. Resuelve el juego de  las diferencias, pupiletras, trivias, crucigramas, preguntas capciosas y ten un entretenimiento productivo, obtén un hábito sano.
               </p>
            </AccordionDetails>
         </Accordion>
         <Accordion
            onChange={() => setCard4(!card4)}
            className={`!rounded-[16px] ${card4 ? Active : Inactive}`}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1-content"
               id="panel1-header"
            >
               <h4 className={`${card4 ? "text-white" : "text-purpleB"}`}>
                  Me interesa ¿Cómo puedo obtener más información sobre el Banco del Saber?
               </h4>
            </AccordionSummary>
            <AccordionDetails>
               <p className='p5'>
                  Nos da gusto tu interés puedes comunicarte el correo:  info@bancodelsaber.com. Para poder conversar o resolver alguna duda.
               </p>
            </AccordionDetails>
         </Accordion>
         <Accordion
            onChange={() => setCard5(!card5)}
            className={`!rounded-[16px] ${card5 ? Active : Inactive}`}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel4-content"
               id="panel4-header"
            >
               <h4 className={`${card5 ? "text-white" : "text-purpleB"}`}>
                  ¿Cómo recojo mi producto comprado?
               </h4>
            </AccordionSummary>
            <AccordionDetails>
               <p className="p5">Puedes venir a recoger tus productos a las oficinas del Banco del Saber.</p>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}

import Link from 'next/link';
import Image from 'next/image';

import BiingSIO from "../public/img/BiingSIO.png";

const Navigation = () => {
   return (
      <header className="header">
         <div className="header__container">
            <Image 
               src={BiingSIO} 
               alt="Icono BiingSIO" 
               className="header__img"
               height={45}
               width={50}
            />

            <Link href="/" passHref>
               <div className="header__logo">
                  #JuntosSomosMás
               </div>
            </Link>
         </div>
      </header>
   )
}

export default Navigation;
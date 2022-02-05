import Link from 'next/link';

const Navigation = () => {
   return (
      <header className="header">
         <div className="header__container">
            <Link href="/">
               <img src="/img/BiingSIO.png" alt="" className="header__img" />
            </Link>

            <div className="header__logo">
               #JuntosSomosMás
            </div>
         </div>
      </header>
   )
}

export default Navigation;
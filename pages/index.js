import Container from '../components/container';
import Boletos from "../components/Boletos";

const Index = () => {

   return (
      <Container>
         {/* En este apartado se puede exportar las 
         etiquetas css o nav para cualquier page */}

         <div className="row">
            <div className="col-md-12 tittle">
               <div className="pharafrase">
                  Boletos vendidos
               </div>
            </div>
         </div>

         <Boletos />

      </Container>
   );
};

export default Index;

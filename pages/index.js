import axios from 'axios';
import Container from '../components/container';

const Index = ({
   allBoletos,
   c, n, r, e, d, s, x, v, m
}) => {
   // console.log(allBoletos);

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

         <div className='row'>
            <div className='col-md-8 mx-auto'>
               <div className="card border-danger mb-3">
                  <div className="card-header">
                     Boletos vendidos: {allBoletos.length}
                  </div>

                  <div className="card-body">
                     <div className='row'>
                        <div className='col-md-3'>
                           <p className="card-text">
                              <b>CarlosVP: </b>
                              {c}
                           </p>
                        </div>
                        
                        <div className='col-md-3'>
                           <p className="card-text">
                              <b>NicolM: </b>
                              {n}
                           </p>                     
                        </div>

                        <div className='col-md-3'>
                           <p className="card-text">
                              <b>RashelM: </b>
                              {r}
                           </p>
                        </div>

                        <div className='col-md-3'>
                           <p className="card-text">
                              <b>ElizaCH: </b>
                              {e}
                           </p>
                        </div>
                     </div>

                     <div className='row'>
                        <div className='col-md-3'>
                           <p className="card-text">
                              <b>DavidV: </b>
                              {d}
                           </p>
                        </div>
                     
                        <div className='col-md-3'>
                           <p className="card-text">
                              <b>SebastianN: </b>
                              {s}
                           </p>
                        </div>

                        <div className='col-md-3'>
                           <p className="card-text">
                              <b>XiomaraBP: </b>
                              {x}
                           </p>
                        </div>

                        <div className='col-md-3'>
                           <p className="card-text">
                              <b>VictorFC: </b>
                              {v}
                           </p>
                        </div>
                     </div>

                     <div className='row'>
                        <div className='col-md-3'>
                           <p className="card-text">
                              <b>MaferL: </b>
                              {m}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='row'>
            {allBoletos.map(boleto => (
               <div className='col-md-4' key={boleto._id}>
                  <div className="card border-success mb-3">
                     <div className="card-header">
                        Boleto #{boleto.numBoleto}
                     </div>

                     <div className="card-body">
                        <h5 className="card-title">{boleto.apellidos} {boleto.nombres}</h5>

                        <p className="card-text">
                           <b>Número: </b>
                           {boleto.numBoleto}
                        </p>
                        <p className="card-text">
                           <b>Teléfono : </b>
                           {boleto.telefono}
                        </p>
                        <p className="card-text">
                           <b>Vendedor: </b>
                           {boleto.vendedor}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>

      </Container>
   );
};

export const getServerSideProps = async (context) => { 
   let c = 0, n = 0, r = 0, e = 0, d = 0, s = 0, x = 0, v = 0, m = 0;
   
   const resp = await axios.get(
      `https://biingsio.herokuapp.com/searchBol?pass="${process.env.pass}"`
   );
   const allBoletos = resp.data.data;

   allBoletos.forEach(boletos => {
      if (boletos.vendedor === 'CarlosVP') {
         ++c;
      }

      if (boletos.vendedor === 'NicolM') {
         ++n;
      }

      if (boletos.vendedor === 'RashelM') {
         ++r;
      }

      if (boletos.vendedor === 'ElizaCH') {
         ++e;
      }

      if (boletos.vendedor === 'DavidV') {
         ++d;
      }

      if (boletos.vendedor === 'SebastianN') {
         ++s;
      }

      if (boletos.vendedor === 'XiomaraBP') {
         ++x;
      }

      if (boletos.vendedor === 'VictorFC') {
         ++v;
      }

      if (boletos.vendedor === 'MaferL') {
         ++m;
      }
   });

   return {
      props: {
         allBoletos,
         c, n, r, e, d, s, x, v, m
      }
   };
};

export default Index;

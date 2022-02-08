import axios from 'axios';

export default async function handlers(req, res) {
   try {
      const resp = await axios.get(
         `https://biingsio.herokuapp.com/searchBol?pass=${process.env.password}`
      );

      return res.status(200).json(resp.data.data);
   } catch (e) {
      console.log(e);

      return res.status(500).json({ 
         message: e.message 
      });
   }
}
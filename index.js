import express from 'express';
import { render } from './utils/render';


const app = express();
app.use(express.static('public'));

app.get('*', function (req, res) {
  res.send(render(req));
});
app.listen(3001, () => {
  console.log('listen:3001')
})
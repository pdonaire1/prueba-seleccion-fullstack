import express from "express";
import CharactersServices from "../services";
const router = express.Router();

router.get('/', (req, res) => {
  res.send({"alive": true});
});

router.get('/characters', async (req, res) => {
  try {
    const query = {
      limit: Number(req.query.limit) || 0,
      page: Number(req.query.page) || 0
    }
    const result = await CharactersServices.getList(query);
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send({ error })
  }
});

router.get('/characters/:id', async (req, res) => {
  try {
    const result = await CharactersServices.get(req.params.id);
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send({ error })
  }
});
export default router;

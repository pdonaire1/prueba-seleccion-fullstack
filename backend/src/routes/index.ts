import express from "express";
import CharactersServices from "../services";
const router = express.Router();

router.get('/', (req, res) => {
  res.send({"alive": true});
});
router.get('/characters', async (req, res) => {
  try {
    const result = await CharactersServices.getList();
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send({ error })
  }
});
export default router;

import express from "express";
const router = express.Router();

router.get('/', (request, response) => {
  response.send({"alive": true});
});
router.get('/characters', (request, response) => {
  response.send({"alive": true});
});
export default router;

import { Router, json } from 'express';
import { createInstitute } from '../controllers/institute.controller.js';
const router = Router();

router.get("/", (request, response) => {
    response.status(200).send("Institute Routes");
});

router.post("/", json(), createInstitute);

export default router;
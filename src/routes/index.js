import { Router } from 'express';
import institueRoutes from './institue.routes.js';
const router = Router();

router.get("/", (request, response) => {
    response.status(200).send("API WORKING");
});

router.use('/institutes', institueRoutes);

export default router;
import express from "express";
import {
    getMatkuls,
    getMatkulById,
    createMatkul,
    updateMatkul,
    deleteMatkul
} from "../controllers/MatkulController.js";

const router = express.Router();

router.get('/matkuls', getMatkuls);
router.get('/matkuls/:id', getMatkulById);
router.post('/matkuls', createMatkul);
router.patch('/matkuls/:id', updateMatkul);
router.delete('/matkuls/:id', deleteMatkul);

export default router;
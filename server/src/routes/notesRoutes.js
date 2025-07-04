import expess from "express";
import {
  createNotes,
  deleteNotes,
  getAllNotes,
  getaNote,
  updateNotes,
} from "../controllers/notesController.js";

const router = expess.Router();

router.get("/", getAllNotes);

router.get("/:id", getaNote);

router.post("/", createNotes);

router.put("/:id", updateNotes);

router.delete("/:id", deleteNotes);

export default router;

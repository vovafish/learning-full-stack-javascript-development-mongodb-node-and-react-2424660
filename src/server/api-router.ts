import express from "express";
import testData from "../test-data.json"

const router = express.Router();

router.get("/contests", (req, res) => {
    res.send([testData])
})

export default router;
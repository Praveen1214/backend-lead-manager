"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/leadRoutes.ts
const express_1 = require("express");
const leadController_1 = require("../controllers/leadController");
const router = (0, express_1.Router)();
router.get('/', leadController_1.getLeads);
router.post('/', leadController_1.createLead);
exports.default = router;

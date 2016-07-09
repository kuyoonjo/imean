'use strict';

import express from 'express';
import passport from 'passport';
import {setTokenCookie} from '../auth.service';

var router = express.Router();

router
  .get('/:token', (req, res) => {
    res.send('success!');
  })

export default router;

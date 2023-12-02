const express = require('express');
const fetch = require('node-fetch');
const amazonMWS = require('amazon-mws');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const BARD_URL = process.env.BARD_URL;
const BARD_API_KEY = process.env.BARD_API_KEY;

const MWS_ACCESS_KEY_ID = process.env.MWS_ACCESS_KEY_ID;
const MWS_SELLER_ID = process.env.MWS_SELLER_ID;
const MWS_MARKETPLACE_ID = process.env.MWS_MARKETPLACE_ID;

const

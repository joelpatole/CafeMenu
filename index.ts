//here we can also populate db

import {config} from 'dotenv'
config();

import { startServer } from './app/app';
startServer();
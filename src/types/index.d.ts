import type { Mongoose } from 'mongoose';

declare global {
  var mongodb: Mongoose | string | null;
  var httpsAgent: Agent;
}
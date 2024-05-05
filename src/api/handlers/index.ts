import createAPI from './api';
import apiEndPoint from './end-point';
import { KEYS } from './keys';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM3ZjNkYWI3OTU2MDNkM2Y5ZDQ2MWEiLCJleHAiOjE3MTQ5NTM3NTkuMTc4LCJpYXQiOjE3MTQ5NDI5NTl9.6jsMKeNAVUEpm6y8HRRiT6i0CKetlP3A4ULNG-z7D3M';
const api = createAPI(authToken);
export { KEYS, api, apiEndPoint };

import {handleAPI} from './lib/session-api.mjs';
export default {fetch(request,env){return handleAPI(request,env.DB);}};

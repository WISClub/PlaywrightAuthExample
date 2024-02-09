//src\app\api\auth\[auth0]\route.ts - this is a nextjs route handler being used by auth0 to add routes like /api/auth/login, /api/auth/logout, /api/auth/callback, and some others
//the folder "[auth0]" is a special folder that is used by auth0 to add routes to the different auth0 routes of login, logout, and callback

import { handleAuth } from "@auth0/nextjs-auth0";

export const GET = handleAuth();
// this means that when a GET request is made to this route, it will be handled by the auth0 library
// so a link to /api/auth/login will be handled by the auth0 library and will redirect to the auth0 login page

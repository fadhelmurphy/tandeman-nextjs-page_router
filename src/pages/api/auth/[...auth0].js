import { getCurrentDateTime } from "@/helpers/utils";
import authService from "@/services/auth-service";
import {
  getSession,
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
} from "@auth0/nextjs-auth0";
import Cookies from "cookies";

const logoutUrl = [
  `${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout?`,
  `client_id=${process.env.AUTH0_CLIENT_ID}`,
  `&returnTo=${process.env.AUTH0_BASE_URL}`,
];
const afterCallback = async (req, res, session, _) => {
  try {
    let user = { ...(session?.user ?? null) };
    user = { ...user, last_login: getCurrentDateTime(), is_login: true };
    const getProject = await authService.postAuthLogin({ user, token: session?.accessToken });
    const cookies = new Cookies(req, res)
    if (getProject?.project_info){
      const {project_name} = getProject?.project_info
      cookies.set("project_name", project_name)
    } else {
      cookies.set("project_name", '', {maxAge: 0})
      cookies.set("appSession", '', {maxAge: 0})
      cookies.set("session", '', {maxAge: 0})
    }
    res.setHeader('Location', process.env.NEXT_PUBLIC_PREFIX);
  } catch (error) {
    console.log("Something went wrong! with error: ", error);
  }
  return session;
};

const logoutCallback = handleLogout(async (req, res) => {
  try {
    const session = await getSession(req, res);
    let user = { ...(session?.user ?? null) };
    user = { ...user, last_logout: getCurrentDateTime(), is_login: false };
    const getProject = await authService.postAuthLogin({ user, token: session?.accessToken });
    const cookies = new Cookies(req, res)
    cookies.set("project_name",'',{maxAge: 0})
  } catch (error) {
    console.log("Something went wrong! with error: ", error);
  }  
  return {
    returnTo: logoutUrl.join('')
  }
});

export default handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: process.env.AUTH0_AUDIENCE_URL, // or AUTH0_AUDIENCE
    },
    returnTo: process.env.NEXT_PUBLIC_PREFIX
  }),
  logout: logoutCallback,
  callback: async (req, res) =>
    await handleCallback(req, res, { afterCallback }),
});

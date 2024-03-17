import { getCurrentDateTime } from "@/helpers/utils";
import authService from "@/services/auth-service";
import {
  getSession,
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
} from "@auth0/nextjs-auth0";

const afterCallback = async (req, res, session, _) => {
  try {
    let user = { ...(session?.user ?? null) };
    user = { ...user, last_login: getCurrentDateTime(), is_login: true };
    await authService.postAuthLogin({ user, token: session?.accessToken });
  } catch (error) {
    console.log("Something went wrong! with error: ", error);
  }
  res.setHeader('Location', process.env.NEXT_PUBLIC_PREFIX);
  return session;
};
const logoutUrl = [
  `${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout?`,
  `client_id=${process.env.AUTH0_CLIENT_ID}`,
  `&returnTo=${process.env.AUTH0_BASE_URL}`,
];

const logoutCallback = handleLogout(async (req, res) => {
  try {
    const session = await getSession(req, res);
    let user = { ...(session?.user ?? null) };
    user = { ...user, last_logout: getCurrentDateTime(), is_login: false };
    await authService.postAuthLogin({ user, token: session?.accessToken });
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

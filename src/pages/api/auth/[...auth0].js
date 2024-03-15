import { getCurrentDateTime } from '@/helpers/utils';
import authService from '@/services/auth-service';
import { getSession, handleAuth, handleCallback, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

const afterCallback = async (req, res, session, _) => {
    let user = {...session?.user ?? null}
    user = {...user, last_login: getCurrentDateTime(), is_login: true}
    await authService.postAuthLogin({user, token: session?.accessToken});
    return session
  };

  const logoutCallback = async (req, res) =>{
    const session = await getSession(req, res)
    let user = {...session?.user ?? null}
    user = {...user, last_logout: getCurrentDateTime(), is_login: false}
    await authService.postAuthLogin({user, token: session?.accessToken});
    await handleLogout(req, res, { returnTo: '/dashboard' })
    }
export default handleAuth({
    login: handleLogin({
      authorizationParams: {
        audience: process.env.AUTH0_AUDIENCE_URL, // or AUTH0_AUDIENCE
      }
    }),
    logout: logoutCallback,
    callback: async (req, res) => await handleCallback(req, res, { afterCallback })
  });
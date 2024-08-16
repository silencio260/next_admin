export const authConfig = {
    providers:[],
    pages: {
      signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
          console.log(auth)
          const isLoggedIn = !!auth?.user
          // const isOnDashboardRoutes = nextUrl.pathname.startsWith('/')
          const isOnDashboard = nextUrl.pathname === '/'
          const isOnNew = nextUrl.pathname.startsWith('/')
          if (isOnDashboard || isOnNew) {
            if (isLoggedIn) return true
            return false // Redirect unauthenticated users to login page
          } else if (isLoggedIn) {
            return Response.redirect(new URL('/', nextUrl))
          }
          return true
      },
    },
  };
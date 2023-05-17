// import Layout from '@/component/layout'
// import Navbar from '@/component/navbar'
// import '@/styles/globals.css'
// import { SessionProvider } from 'next-auth/react'



// export default function App({ Component, pageProps }) {
//   return(
//     <div>
// <SessionProvider session={pageProps.session}>
// <Component {...pageProps} />
// </SessionProvider>
   
//     </div>
//   )
// }
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps, cookies }: AppProps) {
  return (
    //@ts-ignore
    <AuthProvider initialCookies={cookies}>
      <Component {...pageProps} />
      <Toaster/>
    </AuthProvider>
  );
}

App.getInitialProps = async ({ctx}) => {
  const cookies = ctx.req?.headers.cookie;
  return {cookies}
}

export default App
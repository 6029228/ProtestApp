import { Toaster } from 'sonner'
import { ErrorBoundary } from '@/components/error-boundary'

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
      <Toaster />
    </ErrorBoundary>
  )
}

export default MyApp 
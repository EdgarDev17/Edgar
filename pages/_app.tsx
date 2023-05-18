import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {NextUIProvider} from '@nextui-org/react'

function MyApp({Component, pageProps}: AppProps) {
	return (
		<ThemeProvider attribute='class'>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</ThemeProvider>
	)
}

export default MyApp

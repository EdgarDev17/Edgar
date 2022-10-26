import Head from 'next/head'
import Footer from './footer'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MenuBar from './menu-bar'

export default function Layout(props: any) {
	const { children, ...customMeta } = props
	const router = useRouter()

	const meta = {
		title: 'Edgardo Rodriguez - Software Engineer',
		description: `Front-end developer, I am looking to improve my skills every day.`,
		image: '/profile.png',
		type: 'website',
		...customMeta,
	}

	return (
		<div className='bg-gray-50  dark:bg-gray-900'>
			<Head>
				<title>{meta.title}</title>
				<meta name='robots' content='follow, index' />
				<meta content={meta.description} name='description' />
				<meta
					property='og:url'
					content={`https://leerob.io${router.asPath}`}
				/>
				<link
					rel='canonical'
					href={`https://leerob.io${router.asPath}`}
				/>
				<meta property='og:type' content={meta.type} />
				<meta property='og:site_name' content='Lee Robinson' />
				<meta property='og:description' content={meta.description} />
				<meta property='og:title' content={meta.title} />
				<meta property='og:image' content={meta.image} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@leeerob' />
				<meta name='twitter:title' content={meta.title} />
				<meta name='twitter:description' content={meta.description} />
				<meta name='twitter:image' content={meta.image} />
				{meta.date && (
					<meta
						property='article:published_time'
						content={meta.date}
					/>
				)}
			</Head>

			<div>
				<MenuBar />

				<main className=' flex h-full w-full flex-col justify-center bg-gray-50 dark:bg-gray-900'>
					{children}
					<Footer />
				</main>
			</div>
	
		</div>
	)
}

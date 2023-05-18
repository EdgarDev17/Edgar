const randomGradient = {
	'1': 'bg-gradient-to-r from-green-200 to-green-500',
	'2': 'bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300',
	'3': 'bg-gradient-to-r from-rose-700 to-pink-600',
	'4': 'bg-gradient-to-r from-sky-400 to-cyan-500',
	'5': 'bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500',
}

export function getRandomGradient(): string {
	let keys = Object.keys(randomGradient)
	return randomGradient[
		keys[

			Math.floor(Math.random() * keys.length)
		] as keyof typeof randomGradient
	]
}

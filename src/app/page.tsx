import Gallery from './components/Gallery'

export default function Home() {
  return (
    <main className='flex items-center justify-center'>
    <div className="flex min-h-screen flex-col item-left justify-start w-5/6 mt-20">
      <div className='mb-10'>
        <h1 className='text-3xl mb-2 font-serif'>Nature in artificial environments.</h1>
        <p className='text-gray-400 font-serif'>A taxonomy of the flora and botanical garden in Cologne.</p>
        <p className='text-gray-400 font-serif'>By Felix Willen & Max Schmalenbach</p>
      </div>
      <Gallery></Gallery>
    </div>
    </main>
  )
}

import Gallery from './components/Gallery'

export default function Home() {
  return (
    <main className='flex items-center justify-center'>
    <div className="w-5/6 mt-20 mb-20">
      <div className=''>
        <h1 className='text-3xl mb-2 ml-2 font-serif'>Nature in artificial environments.</h1>
        <p className='text-gray-400 ml-2 font-serif'>A taxonomy of the flora and botanical garden in Cologne.</p>
        <p className='text-gray-400 ml-2 font-serif'>By Felix Willen & Max Schmalenbach</p>
      </div>
      <div className='mt-20'>
        
        <Gallery></Gallery>
      </div>
    </div>
    </main>
  )
}

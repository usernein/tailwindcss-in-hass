export function CardContent () {
  return (
    <div className='flex flex-col justify-center items-center rounded-lg text-black'>
      <div className='bg-blue-400 rounded-lg'>
        <div className='font-semibold rounded-lg'>Testeee 444</div>
        <p>Description</p>
        <button
          className='bg-green-300 rounded-lg'
          onClick={() => alert('Hey!')}
        >
          Click
        </button>
      </div>
    </div>
  )
}

import React from 'react'

export default function Heder() {
  return (
    <div>

      <nav id="hero">
        <div className="container mx-auto px-6 space-x-6 flex flex-col-reverse md:flex-row">

          <div className="md:w-1/2 flex flex-col space-y-5 py-6 text-center md:text-left justify-center">

            <h1 className="font-bold text-3xl md:text-5xl">
            Transform your<p className='text-plints-ft'>landscape</p> into a breathtaking oasis
            </h1>
            <p>
            Discover the beauty of diverse flowers and majestic trees today
            </p>
            <a
              href="/product"
              className="py-1 px-6 rounded-full self-center md:self-start text-white bg-orange-500 hover:bg-slate-900"
            >
              Explore Now!!
            </a>
          </div>

          <div className="md:w-1/">
            <img src="src/Icon/undraw_Gardening_re_e658.png" alt="WeepApp" />
          </div>
        </div>
      </nav>
    </div>
  )
}

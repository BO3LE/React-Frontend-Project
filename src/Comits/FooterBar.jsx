import React from 'react'

export default function FooterBar() {
  return (
    <div>
      <footer className='bg-plints-bc'>
        <div className="container mx-auto flex flex-col md:flex-row text-white px-5 py-10 justify-between space-y-8">
            <div className="flex flex-col items-center justify-between space-y-8 md:space-y-2  md:items-start">

                

                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/plantnmore?igsh=MWppMzM5NmJpZHNmdw=="><img src="src/Icon/instagram-line.png" alt="Icon" className='size-8'/></a>
                </div>
               
                
                <div className="flex justify-between space-x-32">
                    <div className="flex flex-col space-y-2">
                        <a href="/" className="text-plints-ft hover:text-plints-hovre font-bold">Home</a>
                        <a href="/about" className="text-plints-ft hover:text-plints-hovre font-bold">About</a>
                        <a href="https://www.instagram.com/plantnmore?igsh=MWppMzM5NmJpZHNmdw==" className="text-plints-ft hover:text-plints-hovre font-bold" target='_blank'> Social</a>
                    </div>
                <div className="flex">
                    <div className=" flex flex-col space-y-2">
                        <a href="/product" className="text-plints-ft hover:text-plints-hovre font-bold">Prodeuct</a>
                        <a href="#" className="text-plints-ft hover:text-plints-hovre font-bold">Privacy</a>
                        <a href="#" className="text-plints-ft hover:text-plints-hovre font-bold">Credits</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                    <form action="#">
                        <input type="text" placeholder='Subscribe to Nwes letter' className='flex-1 py-2 px-6 rounded-full' />
                        <button className='bg-orange-500 hover:bg-slate-800 rounded-full px-4 py-2'>Go</button>
                    </form>
                    <div className="hidden md:block">
                        Copyright &copy; 2024, All Rights For Hsaan Ahmed
                    </div>
                </div>

            </div>
            
        </div>

      </footer>
    </div>
  )
}

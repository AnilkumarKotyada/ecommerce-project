import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                <h1 className="text-4xl font-bold text-pink-600">Mytalorzone By Sahiba</h1>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91-957-345-7008</li>
                        <li>anilkumarkotyada95@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div >
                <hr />
                <p className='py-5 text-sm text-center'>Copyight 2024@ Mytalorzone By Sahiba.com - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer

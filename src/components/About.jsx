const About =()=> {
    return(
        <div>
        <div className='w-full h-full py-16 bg-red-200 px-6'>
            <h2 className="flex flex-wrap justify-center text-2xl font-serif gap-y-10">Welcome to  <span className='text-orange-500'> Delicious</span> - Your Ultimate Food Delivery Companion!</h2>
            <h3 className='font-serif text-xl font-semibold'>About Us:</h3>
            <p id="about-line" className='text-base indent-10 font-normal'>At Delicious, we are passionate about bringing the joy of delicious food right to your doorstep. Our platform is designed to provide a seamless and delightful food ordering experience, ensuring that you can enjoy your favorite meals from the comfort of your home or office.</p>
            <h3 className='text-lg font-sans font-semibold'>What Sets Us Apart:</h3>
            <ul className='font-normal list-disc'>
                <li  className='font-serif indent-3 py-2'>Wide Range of Restaurants:
                    <p id="about-line" className='text-base indent-10'>We've partnered with an extensive network of restaurants, ranging from local gems to popular chains. Whether you're craving traditional comfort food, exotic cuisines, or healthy options, we've got it all.</p>
                </li>
                <li className='font-serif indent-3 py-2'>User-Friendly Interface:
                    <p id="about-line" className='indent-10'>Our user-friendly app makes ordering food a breeze. With a clean and intuitive design, you can browse through menus, customize your orders, and complete the checkout process in just a few taps.</p>
                </li>
                <li className='font-serif indent-3 py-2'>Fast and Reliable Delivery:
                    <p id="about-line" className='indent-10'>We understand the importance of timely deliveries. Our efficient delivery system ensures that your food reaches you hot and fresh. Real-time tracking allows you to monitor the progress of your order from the moment it's placed until it arrives at your doorstep.</p>
                </li>
                <li className='font-serif indent-3 py-2'>Secure Payment Options:
                    <p id="about-line" className='indent-10'>Your convenience and security are our top priorities. Choose from a variety of payment options, including credit/debit cards, digital wallets, and cash on delivery, knowing that your transactions are safe and secure.</p>
                </li>
                <li className='font-serif indent-3 py-2'>Personalized Recommendations:
                    <p id="about-line" className='indent-10'>Our app learns from your preferences and past orders to provide personalized recommendations. Discover new dishes or stick to your favorites – the choice is yours!</p>
                </li>
                <li className='font-serif indent-3 py-2'>Exceptional Customer Support:
                    <p id="about-line" className='indent-10'>Have a question or need assistance? Our customer support team is here to help. Reach out to us through the app, and we'll ensure a prompt and helpful response.</p>
                </li>
                <li className='font-serif indent-3 py-2'>Promotions and Discounts:
                    <p id="about-line" className='indent-10'>Enjoy exclusive deals, discounts, and promotions on your favorite restaurants. We believe in making your dining experience not only delicious but also affordable.</p>
                </li>
            </ul>
            <p id="about-line" className='font-semibold text-center py-5'>Join the Delicious community today and elevate your food ordering experience. Whether it's a cozy night in, a busy workday, or a gathering with friends, we're here to make sure you have the perfect meal, every time.</p>
            <p id="about-line" className='font-semibold text-center'>Indulge in the flavors you love, effortlessly. Welcome to the future of food delivery with Delicious.</p>
        </div>
    </div>
    )
}
export default About
const Contact= () =>{
    return(
        <div className=" flex justify-center items-center gap-y-20 py-10 ">
            <div className="flex flex-col justify-center items-center bg-rose-100 px-20 py-10 w-2/4 h-2/3 rounded-lg mt-32 ">
                <h1 className="text-3xl font-serif mt-3">Contact Us</h1>
                <p id="about-line">We'd love to hear from you! Please feel free to reach out with any questions or feedback.</p>

                <form className="flex flex-col w-2/3 py-1 gap-y-2 ">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="3" required></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}
export default Contact
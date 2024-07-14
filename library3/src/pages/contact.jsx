import Header from "../component/header";
import Footer from '../component/footer';


function Contact_() {


    return (
        <>
            {/* <Header></Header> */}
            <div class="content bg-cyan-300 h-auto">
                <div className=" bg-amber-300 w-auto h-80 bg-center bg-[url('https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg')] bg-cover flex justify-center items-center">
                    <h2 className="text-4xl font-bold text-white">We are happy for you to contact us <br />to hear your opinions and help you</h2>
                </div>
                <div className="flex justify-center items-center pt-20">
                    <form className="flex-col justify-center items-center"  >
                        <div className="flex-row justify-center items-center w-64">
                            <label htmlFor="" className="w-10">Name :
                                <br />
                                < input type="text" />
                            </label>

                            <label htmlFor="" className="w-10">Email :
                                <br />
                                < input type="text" />
                            </label>
                        </div>

                        <label htmlFor="">Message :
                            <br />
                            < input type="text"  className="h-40"/>
                        </label>
                        <br />
                        <button type="click" className="px-10 py-3 m-10 bg-cyan-500">Update</button>
                    </form>
                </div>


            </div>
            {/* <Footer></Footer> */}
        </>

    )
}

export default Contact_;
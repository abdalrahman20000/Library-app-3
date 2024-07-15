
import { useEffect, useState } from "react"
import axios from "axios"

function Catalog() {


    const [data, set_data] = useState([]);

    const [first_index, set_first_index] = useState(0);
    const [last_index, set_last_index] = useState(5);


    // const book__id = sessionStorage.getItem("book_id");

    useEffect(() => {
        axios.get("https://library-74096-default-rtdb.europe-west1.firebasedatabase.app/books/.json")
            .then(res => set_data(res.data))
            .catch(err => console.log(err))


    }, []);



    function update_data(data_, id) {

        axios.patch(`https://library-74096-default-rtdb.europe-west1.firebasedatabase.app/books/${Object.keys(data)[id]}.json`,
            {

                deleted: true,


            },

            alert("deleted !!!")
        )
            .catch(err => console.log(err))

    }

    function add_data() {


        axios.post("https://library-74096-default-rtdb.europe-west1.firebasedatabase.app/books.json",
            {

                author: document.getElementById("author_a").value,
                isbn: document.getElementById("isbn_a").value,
                deleted: false,
                title: document.getElementById("title_a").value

            },
            alert("added !!!")
        )
            .catch(err => console.log(err))


    }

    function delete_data(data_, id) {

        axios.patch(`https://library-74096-default-rtdb.europe-west1.firebasedatabase.app/books/${Object.keys(data)[id]}.json`,
            {


                deleted: true


            },

            alert("deleted !!!")
        )
            .catch(err => console.log(err))

    }

    function page_hamdler(p) {

        if (p == 0) {
            set_first_index(0);
            set_last_index(5);
        }
        else {
            set_first_index(p * 5);
            set_last_index((p * 5) + 5);
        }

    }

    return (

        <main>
            {Object.values(data).map((tracker, index) => {
                return (
                    !tracker.deleted ? <div key={index} className="card w-60 px-5 flex-col justify-center items-center">
                        <h2 className="text-xl font-bold text-center w-50">{tracker.title}</h2>
                        <h4 className="pr-5 my-2">{tracker.author}</h4>
                        <p className="mb-3 pr-5 my-2">{tracker.isbn}</p>
                        <div className="flex justify-center items-center ">
                            <button id="btn" className="m-2 mb-4" onClick={() => (delete_data(tracker, index))}>Delete</button>
                            <button id="btn" className="m-2 mb-4" onClick={() => (document.getElementById("update").style.display = "block", update_data(tracker.isbn))}>Update</button>
                        </div>
                    </div> : null
                )
            }).slice(first_index, last_index)}


            <div className="pagination w-96 flex justify-center items-center">
                <button className="page m-5 bg-violet-400 px-3 py-2 text-white font-bold rounded" onClick={() => (page_hamdler(0))}>1</button>
                <button className="page m-5 bg-violet-400 px-3 py-2 text-white font-bold rounded" onClick={() => (page_hamdler(1))}>2</button>
                <button className="page m-5 bg-violet-400 px-3 py-2 text-white font-bold rounded" onClick={() => (page_hamdler(2))}>3</button>
                <button className="page m-5 bg-violet-400 px-3 py-2 text-white font-bold rounded" onClick={() => (page_hamdler(3))}>4</button>
                <button className="page m-5 bg-violet-400 px-3 py-2 text-white font-bold rounded" onClick={() => (page_hamdler(4))}>5</button>

            </div>


            <div className="add_container" >
                <div id="add">
                    <form id="sign_form">
                        <label htmlFor="">Title :
                            <br />
                            < input type="text"
                                id="title_a"
                                required
                            />
                        </label>

                        <label htmlFor="">Author :
                            <br />
                            < input type="text"
                                id="author_a"
                                required

                            />
                        </label>

                        <label htmlFor="">isbn :
                            <br />
                            < input type="text"
                                id="isbn_a"
                                required

                            />
                        </label>

                        <button onClick={(e) => { e.preventDefault(); add_data() }}>Add</button>
                    </form>
                </div>
            </div>


            <div id="update">
                <form id="sign_form">
                    <label htmlFor="">Title :
                        <br />
                        < input type="text"
                            id="title_u"
                            required
                        />
                    </label>

                    <label htmlFor="">Author :
                        <br />
                        < input type="text"
                            id="author_u"
                            required

                        />
                    </label>

                    <button type="click" onClick={update_data}>Update</button>
                </form>
            </div>
        </main>
    );

}

export default Catalog;

import { useEffect, useState } from "react"
import axios from "axios"

function Catalog() {


    const [data, set_data] = useState([]);



    // const book__id = sessionStorage.getItem("book_id");

    useEffect(() => {
        axios.get("https://library-74096-default-rtdb.europe-west1.firebasedatabase.app/books/.json")
            .then(res => set_data(res.data))
            .catch(err => console.log(err))


    }, []);

    function update_data(id) {
        // alert(book__id)

        axios.put("https://library-74096-default-rtdb.europe-west1.firebasedatabase.app/books/" + id + ".json",
            {

                author: document.getElementById("author_u").value,
                isbn: id,
                title: document.getElementById("title_u").value

            }
        )
            .catch(err => console.log(err))

    }

    function add_data(e) {
        e.preventDefault();
        alert(isbn_a);

axios.post("https://library-74096-default-rtdb.europe-west1.firebasedatabase.app/books/" + document.getElementById("isbn_a").value + ".json",
                {

                    author: document.getElementById("author_a").value,
                    isbn: document.getElementById("isbn_a").value,
                    title: document.getElementById("title_a").value

                },
                alert("added !!!")
            )
                .catch(err => console.log(err))


    }

    function delete_data(id) {


        axios.delete("https://library-74096-default-rtdb.europe-west1.firebasedatabase.app/books/" + id + ".json",

            alert("deleted !!!" + id)
        )
            .catch(err => console.log(err))

    }

    return (

        <main>
            {Object.values(data).map((tracker) => (
                <div key={tracker} className="card">
                    <h2>{tracker.title}</h2>
                    <h4>{tracker.author}</h4>
                    <p>{tracker.isbn}</p>
                    <button onClick={() => (delete_data(tracker.isbn))}>Delete</button>
                    <button onClick={() => (document.getElementById("update").style.display = "block", update_data(tracker.isbn))}>Update</button>
                </div>
            ))}
            <div className="add_container">
                <div id="add">
                    <form  >
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
                            < input type="text_a"
                                id="isbn"
                                required

                            />
                        </label>

                        <button type="click" onClick={() => (alert(document.getElementById("isbn_a").value), add_data())}>Add</button>
                    </form>
                </div>
            </div>


            <div id="update">
                <form  >
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
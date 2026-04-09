import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ImageCard from './components/ImageCard'

const App = () => {

  const [finalLimit, setFinalLimit] = useState(8);
  const [limit, setLimit] = useState(8);
  const [userArray, setUserArray] = useState([])
  const [page, setPage] = useState(1);

  useEffect(function () {
    const getData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${finalLimit}`);
      setUserArray(response.data);
    }

    getData();
  }, [page, finalLimit])

  return (
    <div>
      <h1>Gallary Project</h1>
      <form className="setLimitForm">
        <span>Set the limit of the Images</span>
        <div>
          <input type="Number"
            onChange={(event) => {
              setLimit(event.target.value)
            }}
            value={limit} />
          <button onClick={(event) => {
            event.preventDefault();
            setFinalLimit(limit)
          }}>Submit</button>
        </div>
      </form>

      <div className="gallaryInterface">
        {userArray.length == 0 ? <div className="loadingImageBox">Loading Images...</div> : (
          <>
            {userArray.map((elem) => {
              return (
                <ImageCard elem={elem} key={elem.id} />
              )
            })}
          </>
        )}
      </div>

      <div className="navPages">
        <button id="prevBtn" onClick={() => {
          if (page > 1) {
            setUserArray([]);
            setPage(page - 1);
          }
        }}>Prev</button>
        <span>{page}</span>
        <button id="nextBtn" onClick={() => {
          setUserArray([]);
          setPage(page + 1);
        }}>Next</button>
      </div>
    </div>

  )
}

export default App

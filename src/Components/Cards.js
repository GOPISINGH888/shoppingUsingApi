import React, {useState} from 'react';
import '../App.css';

const Cards =  () => {
    const [result, setResult]=useState([])



    const handleSubmit = async (e) => {
      await fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) =>setResult(json));
  
      console.log(result)
    }
  
    return (
  <div className="App">
      <div className="container space">
            {result.map(item=>(
        <div className="card p-3 has-background-success-light mt-5 ">
        <p className='is-align-content-center title is-4 p-3 pt-5'> {item.category}</p>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image ">
                <img className='image' src={item.image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p classNamelass="title is-5">{item.title}</p>
              <p className="subtitle is-6">Product Code.334{item.id}</p>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer foot">
            <p className='is-align-content-center card-footer-item '>Price : ${item.price} only</p>
          </div>
      </div>
      ))}
      <div className='button ' onClick={()=>handleSubmit()}>
          Enter For Shopping
      </div>
    </div>
  </div>
    
        );
    }
      export default Cards
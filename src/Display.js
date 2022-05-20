import React, { useState } from 'react'
import cc from './favicon-32x32.png'
import dd from './profile_3.jpg'




const Display = () => {

    let [data, setData] = useState( [
        { id: 1, title: 'Blessing Tech', body: 'We build web apps', author: 'Blessing', img: cc},
           
        {id: 2, title: 'Silvanus Tech', body: 'Web/Product designs', author: 'Silva', img: dd},
    
        {id: 3, title: 'Rilwans consult', body: 'We carry out therapeutic consultations', author: 'Rilwan', img: cc},
    
        {id: 4, title: 'B-lard computers', body: 'We procure hardwares and software apps', author: 'B-lard', img: dd}
    ])
function removeItem(id){
    let remove = data.filter((detail)=> detail.id !== id)
    setData(remove)}

    function commotAll(){
        setData([])
    }

  return (
    <div>
        {data.map((datum)=>{
            const {title,body,author,id,img} = datum
            return(
                <div className="move" key={id}>
                    <h2>Company: {title}</h2>
                    <h2>Services: {body}</h2>
                    <h2>Author: {author}</h2>
                    <button className='clickBtn' onClick={()=> removeItem(datum.id)}>click me</button>
                    <div className="">
                        <img src={img} alt="" srcset="" />
                    </div>

                </div>
            )
        })

        }
<button className='clearBtn' onClick={commotAll} >Clear</button>



        <div className="maq">
        <marquee behavior="scroll" direction="left">
            <h3>Welcome to blard Page</h3>
        </marquee>
        </div>

    </div>
  )
}

export default Display
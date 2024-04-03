import React from 'react'

const Shimmer = () => {
    const style = {
        backgroundColor: 'rgb(242, 242, 242)',
        height: '179px',
        width: '179px',
        borderRadius: '5px'
    }
    
    
  return (
    <>
        {[1,2,3,4,5,6,7,8,9,10,11,12].map(()=> {
            return (
                <div key={Math.random()} style={{height: '260px', width: '179px', borderRadius: '5px', marginTop: '10px', marginRight: '20px'}}>
                    <div style={style}></div>
                    <div style={{backgroundColor: 'rgb(242, 242, 242)', height: '15px', width: '100px',marginTop: '3px'}}></div>
                    <div style={{backgroundColor: 'rgb(242, 242, 242)', height: '15px', width: '120px',marginTop: '3px'}}></div>
                </div>
            )
        })
        }
  </>
  )
}

export default Shimmer;
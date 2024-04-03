import React from 'react';


const HistoryComponent = () => {

    const style = {
        // backgroundColor: 'gray',
        height: '3469.11px',
        width: '450px',
        position: 'fixed',
        right: '0px',
        top: '43px',
        bottom: '0px'
    }

    return (
        <div style={style}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f2f2f2'}}>
                <h3>
                    <span style={{height: '18px', width: '18px', backgroundImage: `url(https://a-v2.sndcdn.com/assets/images/calendar-f8dabf8c.svg)`}}></span>
                    <span>
                        Listening history
                    </span>
                </h3>
                <h3>view all</h3>
            </div>
            <div>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <div>
                            <span>
                                <div style={{width: '50px', height: '50px', backgroundColor: 'lightgray'}}></div>
                            </span>
                            <div>
                                <div style={{width:'100px', backgroundColor: 'lightgray' }}></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>
                                <div style={{width: '50px', height: '50px', backgroundColor: 'lightgray'}}></div>
                            </span>
                            <div>
                                <div style={{width:'100px', backgroundColor: 'lightgray' }}></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>
                                <div style={{width: '50px', height: '50px', backgroundColor: 'lightgray'}}></div>
                            </span>
                            <div>
                                <div style={{width:'100px', backgroundColor: 'lightgray' }}></div>
                            </div>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default HistoryComponent;
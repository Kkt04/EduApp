import React from 'react';

const Head =() =>{
    return (
        <>
            <section className='head'>
                <div className='conatiner-flexSB'>
                    <div className='logo'>
                        <h1>COURSE<span tyle={{ backgroundColor: 'orange', borderRadius: '20px' }}>BAZAR</span></h1>
                    </div>
                    {/* <header className='flexSB'>
                    <div className='social'>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <i className='fab fa-youtube icon'></i>
                    </div>
                    </header> */}
                </div>
            </section>
        </>
    )
}
export default Head;
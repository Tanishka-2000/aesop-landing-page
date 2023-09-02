import './styles.css';

// container - width, wrapper - height, gallery - height 
function Gallery({ info, products }) {
  return (
    <section className='gallery'>
        <div className='outer-wrapper'>
            <div className='outer-container'>
                <div className='info'>
                    <div>
                        <h3>{ info.subheading }</h3>
                        <h2>{ info.heading }</h2>
                    </div>
                    <div>
                        <p>{ info.para }</p>
                        <button className='btn'>{ info.button }<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                
                <div className='inner-wrapper'>
                    <div className='inner-container'>
                    {
                        products.map( product => 
                            <div key={product.heading} className='product'>
                                <img src={product.image}/>
                                <h4>{ product.heading }</h4>
                                <p>{ product.subheading }</p>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery
import './styles.css';

function Grid({ align, images, subheading, heading, para, button, bottomLine }) {
  return (
    <section className={align == 'left' ? 'grid left' : 'grid right'} >

        {
          images.length > 1 ?
          <div className='image'>
            <div className='outer-image-wrapper'>

              <div className='inner-image-wrapper'>
                <div className='image-container'>
                  { images.map( image => <div key={image}><img src={image} /></div>)}
                </div>
              </div>
            </div>
            <p style={{ marginTop: '50px'}}>{ bottomLine }</p>
          </div>
          : <div className='image'>
              <img src={images[0]} />
          </div>
        }

        <div className='info'>
            <h3>{ subheading }</h3>
            <h2>{ heading }</h2>
            <p>{ para }</p>
            <button className='btn-outline'>
                { button } 
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </section>
  )
}

export default Grid
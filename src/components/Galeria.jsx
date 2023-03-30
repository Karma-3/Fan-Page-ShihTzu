import React from 'react'
import PhotoAlbum from "react-photo-album";
import '../styles/galeria.css'

const Galeria = () => {

  const galeria = [
    
      {src: 'https://images7.alphacoders.com/741/thumb-1920-741152.jpg', width: 800, height: 600,},
      {src: 'https://w0.peakpx.com/wallpaper/980/400/HD-wallpaper-dogs-shih-tzu.jpg', width: 800, height: 600,},
      {src: 'https://wallpapercave.com/dwp1x/wp2355258.jpg', width: 800, height: 600, },
      {src: 'https://wallpapercave.com/dwp1x/wp2355240.jpg', width: 800, height: 600,},
      {src: 'https://images.unsplash.com/photo-1534628526458-a8de087b1123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', width: 800, height: 600,},
      {src: 'https://images.unsplash.com/photo-1619736163418-0826329731fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaWglMjB0enV8ZW58MHx8MHx8&w=1000&q=80', width: 800, height: 1000,},
      {src: 'https://images.unsplash.com/photo-1562835644-322e337e3bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80', width: 800, height: 1000  ,},
      {src: 'https://media.istockphoto.com/id/1039771690/es/foto/shih-tzu.jpg?s=612x612&w=0&k=20&c=liHn5Z1-G72DSnKAUTtyZ_4rnqYRD8Z3AJpsxbWv0Dk=', width: 800, height: 1000,},
      {src: 'https://images.unsplash.com/photo-1582481673602-22c7d366bafc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80', width: 800, height: 600,},
      {src: 'https://images.unsplash.com/photo-1657628271975-0d146c8d6287?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', width: 800, height: 600,},
      {src: 'https://media.istockphoto.com/id/861894600/es/foto/perro-shih-tzu-de-pelo-corto-blanco-en-busca-de-algo.jpg?s=612x612&w=0&k=20&c=v94Ltbj6hUCGnvD0sYYn7fPV2cGyMYTtfHANnlFQ0xo=', width: 800, height: 1000,},
      {src: 'https://media.istockphoto.com/id/1273533509/es/foto/perro.jpg?s=612x612&w=0&k=20&c=TTkKqKJ4RisMPBwp38iRdChI1L07aoXhkXcNNYeVZpc=', width: 800, height: 1000,},  
      {src: 'https://images.unsplash.com/photo-1581582962839-0ff77bb4e4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHNoaWglMjB0enV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', width: 800, height: 600,},  
      {src: 'https://media.istockphoto.com/id/522297113/es/foto/peque%C3%B1os-perro.jpg?s=170667a&w=0&k=20&c=9oUcL6HximRM7hPDP5EXsfLVsb0gF5mNLgjKYA5Pf8w=', width: 800, height: 600},
      {src: 'https://media.istockphoto.com/id/470005070/es/foto/shih-tzu.jpg?s=612x612&w=0&k=20&c=e-58bxuQ8lI6Fy5wTctC9YxHoHxo2f582wFgxUoK9ds=', width: 800, height: 600}

    
  ]

  return (
    <section className="contenedor-galeria">
      <div data-aos="fade-right">
      <h2>Galeria</h2>
      </div>
      <div className="galeria">
      <div data-aos="fade-up">

      <PhotoAlbum layout="masonry" photos={galeria} padding='10' />
      </div>
      </div>
    </section>
  )
}

export default Galeria
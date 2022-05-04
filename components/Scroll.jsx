
import react from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';

// import  {OverscrollOptions} from 'smooth-scrollbar/plugins/overscroll';




  const overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: '#fff',
  };

//   const overscrollOptions = {
//     enable: true,
//     effect: 'glow',
//     damping: 0.1,
//     maxOverscroll: 200,
//     glowColor: '#222a2d',
//   };

  
const options = {
    damping : 0.07,
    plugins: {
    //   overscroll: { ...overscrollOptions },
    },
    
  }
  
  const Scroll = () => {

    useEffect(() => {

        // SmoothScrollbar.use(OverscrollOptions);

        new SmoothScrollbar(document.body,options);
        // SmoothScrollbar.init(document.body, options);
        
    
      
    
        return () => {
        //   if (SmoothScrollbar) SmoothScrollbar.destroy(document.body);
        }  },[])
  


    return null;
}

export default Scroll;
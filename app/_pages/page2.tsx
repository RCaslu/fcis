import PasswordInput from './forms';

const Page2 = () => {
    return ( 
        <div style={{
            backgroundImage: "url('/02/BACKGROUND.png')", // Correct path to the image
            height: 'flex',
            backgroundSize: 'cover',  
            backgroundPosition: 'center' 
          }}>

          <PasswordInput />
        </div>
     );
}
 
export default Page2;
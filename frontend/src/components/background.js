import backgroundImage from './back2.jpg';

const Background = ({ children }) => (
  <div style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
  }}>
    {children}
  </div>
);
export default Background

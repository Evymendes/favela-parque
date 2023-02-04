import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id='/home'>
      <p>Home</p>
      <Link to='/o-programa'> Ir para tela o prog ram a</Link>
      {/* <Link to='/o-programa'> Ir para tela o prog ram a</Link> */}
    </div>

  );
}

export default Home;
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <p>Home</p>
      <Link to='/o-programa'> Ir para tela o prog ram a</Link>
      {/* <Link to='/o-programa'> Ir para tela o prog ram a</Link> */}
    </>

  );
}

export default Home;
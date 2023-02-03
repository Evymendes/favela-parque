import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <p>Home</p>
      <Link to='/o-programa'> Ir para tela o prog ram a</Link>
    </>

  );
}

export default Home;

yarn global add serve
serve -s build
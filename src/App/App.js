import { customCard } from '../components/CustomCard'
import { customHeader } from '../components/CustomHeader'
import { cardsContainer } from '../components/cardsContainer'
import { customFooter } from '../components/CustomFooter'

import './App.css';

function App() {
  return (
    <>
      <customHeader>Mi pequeña aventura en el desarrollo web</customHeader>
      <cardsContainr>
        <customCard></customCard>
      </cardsContainr>
      <customFooter />
    </>
  );
}

export default App;

import './App.css';
function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea cols="30" rows="10" placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
      <ul>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            <p>Escreva Sua nota</p>
          </section>
        </li>
      </ul>
    </section>
  );
}

export default App;

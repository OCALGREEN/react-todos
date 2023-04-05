import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mt-5 container">
      <dvi className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assiged</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Feed dog</td>
                <td>Eric</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Get haircut</td>
                <td>Eric</td>
              </tr>
            </tbody>
          </table>
        </div>
      </dvi>
    </div>
  );
}

export default App;

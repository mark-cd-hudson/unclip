import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import { debounce } from "debounce";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      images: [
        "https://images.unsplash.com/photo-1553781808-f27ef4fdd633?h=800",
        "https://images.unsplash.com/photo-1571084797756-44c01f79d666?h=800",
        "https://images.unsplash.com/photo-1545244812-7d4705ceaf08?h=800",
        "https://images.unsplash.com/photo-1584454609628-cb87c7f02947?h=800",
        "https://images.unsplash.com/photo-1548689551-5be7ab3f02c4?h=800",
        "https://images.unsplash.com/photo-1552400577-5d79546f1b44?h=800",
        "https://images.unsplash.com/photo-1575315599169-24a6f8689472?h=800",
        "https://images.unsplash.com/photo-1575315599174-f0c6d26625eb?h=800",
        "https://images.unsplash.com/photo-1544621660-5e48188fd59c?h=800",
        "https://images.unsplash.com/photo-1576052176499-0ee725853228?h=800",
        "https://images.unsplash.com/photo-1578596417414-42af8d989383?h=800",
        "https://images.unsplash.com/photo-1561003340-57c694b36322?h=800",
        "https://images.unsplash.com/photo-1490650191633-406b47bf6e25?h=800",
        "https://images.unsplash.com/photo-1566754046630-05a262f1c60e?h=800",
        "https://images.unsplash.com/photo-1570924980288-c5b8d42195bd?h=800",
        "https://images.unsplash.com/photo-1580986475038-72316be26728?h=800",
        "https://images.unsplash.com/photo-1542481744-889f10c39ace?h=800",
        "https://images.unsplash.com/photo-1565645359958-700098a0a5aa?h=800",
        "https://images.unsplash.com/photo-1552399725-7744e3fda08f?h=800",
        "https://images.unsplash.com/photo-1556293357-9213773bed3b?h=800",
      ]
    };
    this.setQuery = this.setQuery.bind(this);
    this.search = this.search.bind(this);
    this.search = debounce(this.search, 300);
  }

  search  = () => {
    const query = this.state.query;
    fetch(`https://floofe.com/search?q=${query}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            status: result.status,
            images: result.images,
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  setQuery = (query) => {
    this.setState({query}, this.search)
    // fetch("https://unclip.markhudson2.repl.co/")
  }

  render() {
    return (
      <div className="App">
        <div className="top">
          <SearchBar query={this.state.query} setQuery={this.setQuery}/>
        </div>
        <div className="bottom">
          <div className="col">
            {this.state.images.filter((im, i) => i % 3 === 0).map((im) =>
              <div>
                <img key={im} src={im} alt=""/>
              </div>
            )}
          </div>
          <div className="col">
            {this.state.images.filter((im, i) => i % 3 === 1).map((im) =>
              <div>
                <img key={im} src={im} alt=""/>
              </div>
            )}
          </div>
          <div className="col">
            {this.state.images.filter((im, i) => i % 3 === 2).map((im) =>
              <div>
                <img key={im} src={im} alt=""/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <SearchBar/>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

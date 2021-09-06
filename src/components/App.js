import './App.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './SearchBar';
import ImageInfo from './ImageInfo';

export default function App() {
  const [imageName, setImageName] = useState('');

  const handleSearchFormSubmit = data => {
    setImageName(data.trim());
  };

  return (
    <div className="App">
      <SearchBar onSearchFormSubmit={handleSearchFormSubmit} />

      <ImageInfo imageName={imageName} />

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     imageName: '',
//   };

//   handleSearchFormSubmit = data => {
//     this.setState({ imageName: data.trim() });
//   };

//   render() {
//     return (
//       <div className="App">
//         <SearchBar onSearchFormSubmit={this.handleSearchFormSubmit} />

//         <ImageInfo imageName={this.state.imageName} />

//         <ToastContainer
//           position="top-center"
//           autoClose={2000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />
//       </div>
//     );
//   }
// }

// export default App;

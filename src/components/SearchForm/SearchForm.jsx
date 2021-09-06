import s from './SearchForm.module.css';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchForm(options) {
  const [imageName, setImageName] = useState('');

  const handleNameChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (imageName.trim() === '') {
      toast.warn('😰 Nothing found, please specify your request 😵');
      return;
    }
    options.onSearchFormSubmit(imageName);
    setImageName('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.SearchForm}>
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={imageName}
        onChange={handleNameChange}
      />
    </form>
  );
}

// export default class SearchForm extends Component {
//   state = {
//     imageName: '',
//   };

//   handleNameChange = event => {
//     this.setState({ imageName: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.imageName.trim() === '') {
//       toast.warn('😰 Nothing found, please specify your request 😵');
//       return;
//     }
//     this.props.onSearchFormSubmit(this.state.imageName);
//     this.setState({ imageName: '' });
//   };

//   render() {
//     const { handleSubmit, handleNameChange } = this;
//     const { imageName } = this.state;
//     return (
//       <form onSubmit={handleSubmit} className={s.SearchForm}>
//         <button type="submit" className={s.SearchFormButton}>
//           <span className={s.SearchFormButtonLabel}>Search</span>
//         </button>

//         <input
//           className={s.SearchFormInput}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={imageName}
//           onChange={handleNameChange}
//         />
//       </form>
//     );
//   }
// }

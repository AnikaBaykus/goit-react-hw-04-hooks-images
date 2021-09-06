import { Component } from 'react';
import s from './Loader.module.css';
import Loader from 'react-loader-spinner';

export default class LoaderMy extends Component {
  render() {
    return (
      <div className={s.Loader}>
        <Loader
          className={s.Spinner}
          type="Rings"
          color="#3f51b5"
          height={100}
          width={100}
          timeout={5000}
        />
      </div>
    );
  }
}

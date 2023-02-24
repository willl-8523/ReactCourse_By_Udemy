// import { Component } from "react";

// import './search-box.styles.css';

// class SearchBox extends Component {
//   render() {
//     const { className, placeholder, onSearchChangeHandler } = this.props;

//     return (
//       <>
//         <input
//           className={ `search-box ${className}` }
//           type="search"
//           placeholder={ placeholder }
//           onChange={ onSearchChangeHandler }
//         />
//       </>
//     );
//   }
// }

/* Convert to fonctionnal component */
import './search-box.styles.css';

// const SearchBox = (props) => {
//   const { className, placeholder, onSearchChangeHandler } = props; OU
const SearchBox = ({ className, placeholder, onSearchChangeHandler }) => {
  
  return (
    <>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
      />
    </>
  );
};

export default SearchBox;
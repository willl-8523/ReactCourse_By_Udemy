import { Component } from "react";

class SearchBox extends Component {
    render() {
        const { className, placeholder, onSearchChangeHandler } = this.props;

        return (
          <>
            <input
              className={ className }
              type="search"
              placeholder={ placeholder }
              onChange={ onSearchChangeHandler }
            />
          </>
        );
    }
}

export default SearchBox;
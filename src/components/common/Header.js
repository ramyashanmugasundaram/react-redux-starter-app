import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Loader from './Loader';

const Header = ({loading}) => {
    return(
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="about" activeClassName="active">About</Link>
        {loading && <Loader interval={200} dots={20}/>}
      </nav>
    );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
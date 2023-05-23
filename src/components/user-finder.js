import { Component, Fragment, useState, useEffect } from 'react';

import Users from './Users';
import classes from './user-finder.module.css';
import ErrorBoundary from './error-boundary';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    constructor() {
      super();
      this.state = {
        filteredUsers: DUMMY_USERS,
        searchTerm: ""
      };
    }

    componentDidUpdate(prevProps, prevState) {
      if(prevState.searchTerm !== this.state.searchTerm) { /* So if the previous state was difgferent from the current one, than execute ortherwise not. So if the filteredUsers change than dont */
        this.setState({filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)),}); /* This would make an infinite loop, as this method executes every time this component change, but as this line changes it, so would wxecute again */
      }
    }

    searchChangeHandler(event) {
      this.setState({searchTerm: event.target.value});
    }

    render() {
      return (
        <Fragment>
          <div className={classes.finder}>
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
          </div>
          <ErrorBoundary>
            <Users users={this.state.filteredUsers} />
          </ErrorBoundary>
        </Fragment>
      );
    }
}



/* const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};
 */
export default UserFinder;
import React, { Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repo from '../repos/Repo';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, getRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card gerid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Loaction: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repo repos={repos} />
    </Fragment>
  );
};

// User.propTypes = {
//   loading: PropTypes.bool,
//   user: PropTypes.object.isRequired,
//   repos: PropTypes.array.isRequired,
//   getUser: PropTypes.func.isRequired,
//   getRepos: PropTypes.func.isRequired
// };

export default User;

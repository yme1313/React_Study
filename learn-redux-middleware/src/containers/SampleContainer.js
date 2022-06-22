import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadinUsers
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadinUsers}
    />
  )
}

export default connect(
  ({ sample }) => ({
    post : sample.post,
    users : sample.users,
    loadingPost : sample.loading.GET_POST,
    loadinUsers : sample.loading.GET_USERS
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer)
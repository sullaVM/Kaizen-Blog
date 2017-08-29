import {
  connect,
} from 'preact-redux';

import {
  bindActionCreators,
  Dispatch,
} from 'redux';

import {
  MapToArray,
} from '../utils';

import {
  getBlogs,
} from '../stores/blogs';

import {
  State,
} from '../stores/root';

import Blogs from '../components/Blogs';

const mapState = (state: State) => ({
  blogs: MapToArray(state.blogs.blogPosts),
  loading: state.blogs.loading,
});

const mapDispatch = (dispatch: Dispatch<State>) => bindActionCreators({
  getBlogs,
}, dispatch);

const BlogsContainer = connect(
  mapState,
  mapDispatch,
)(Blogs);

export default BlogsContainer;
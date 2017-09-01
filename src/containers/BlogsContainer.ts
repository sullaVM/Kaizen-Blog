import {
  connect,
} from 'preact-redux';

import {
  bindActionCreators,
  Dispatch,
} from 'redux';

import {
  objectToArray,
} from '../utils';

import {
  getBlogs,
} from '../stores/blogs';

import {
  navigate,
} from '../stores/router';

import {
  State,
} from '../stores/root';

import Blogs from '../components/Blogs';

const mapState = (state: State) => ({
  blogs: objectToArray(state.blogs.blogPosts),
  loading: state.blogs.loading,
});

const mapDispatch = (dispatch: Dispatch<State>) => bindActionCreators({
  getBlogs,
  showBlog: (path:string) => navigate(`/blogs/${path}`),
  showAuthor: (path: string) => navigate(`/u/${path}`),
}, dispatch);

const BlogsContainer = connect(
  mapState,
  mapDispatch,
)(Blogs);

export default BlogsContainer;
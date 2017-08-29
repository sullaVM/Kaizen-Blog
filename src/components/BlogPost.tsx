import { h, Component } from 'preact';

interface BlogPostProps {
  path: string;
  id: string;
  blogs: BlogMap;
  loading: boolean;
  selectedPost: string;
  setActivePost: (id: string) => void;
}

class BlogPost extends Component<BlogPostProps, any>{

  componentDidMount() {
    const {
      id,
      blogs,
      loading,
      selectedPost,
      setActivePost,
    } = this.props;
    const blogId = (id as string).split('-')[0];
    if (
      blogId !== selectedPost ||
      !(blogs[blogId] || loading)
    ) {
      setActivePost(blogId);
    }
  }

  render({
    blogs,
    loading,
    selectedPost,
  }: BlogPostProps) {

    const blog = blogs[selectedPost];

    if (loading || !blog) {
      return (
        <div>loading</div>
      );
    }

    return (<div>{blog.title}</div>);
  };
}

export default BlogPost;
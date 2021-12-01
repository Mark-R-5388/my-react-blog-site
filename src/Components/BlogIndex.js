import BlogIndexItem from "./BlogIndexItem";

function BlogIndex() {
  const blogIndexContainer = {
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    width: "80%",
    minHeight: "60vh",
    height: "100vh",
    paddingBottom: "6em",
  };

  const blogIndexItemStyle = {
    background: "#fff",
    color: "black",
    width: "20%",
    border: "1px solid red",
  };

  return (
    <div style={blogIndexContainer}>
      <BlogIndexItem
        style={blogIndexItemStyle}
        title="Blog Post 1"
        date="11/27/21"
        description="First Blog Post"
      />
      <BlogIndexItem
        style={blogIndexItemStyle}
        title="Blog Post 2"
        date="11/28/21"
        description="Second Blog Post"
      />
      <BlogIndexItem
        style={blogIndexItemStyle}
        title="Blog Post 3"
        date="11/29/21"
        description="Third Blog Post"
      />
      <BlogIndexItem
        style={blogIndexItemStyle}
        title="Blog Post 4"
        date="11/30/21"
        description="Third Blog Post"
      />
    </div>
  );
}

export default BlogIndex;

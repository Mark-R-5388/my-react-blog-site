function BlogIndexItem(props) {
  return (
    <div style={props.style}>
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default BlogIndexItem;

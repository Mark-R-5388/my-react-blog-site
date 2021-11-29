import "../index.css";

function BlogPost() {
  return (
    <main className="single-blog-container">
      <h1 className="single-blog-title">My First Blog Post</h1>
      <p className="single-blog-date">November 29, 2021</p>
      <h2 className="single-blog-sub-heading">What I am Writing about</h2>
      <div className="single-blog-content">
        <p>
          This is going to be a blog site about my journey becoming a Web
          Developer. I thank you for joining me for the ride and the many
          thoughts i will be putting down into the internet space.
        </p>
        <p>
          For a as long as I can remember I have always wanted to help people.
          This is in many different forms such as mentaly and physically. My
          calling started with me wanting to become a personal trainer.
        </p>
        <p>
          Things were going very well and I even had quite a few clients growing
          my business. Then one day 2020 happened and life through me a
          curveball.
        </p>
        <p>
          With covid, training people in their homes was out of the question and
          gyms had closed down so I had to find a new way to reach people. Hence
          my journey as a web developer began.
        </p>
        <p>
          Full disclosure, I have never been the most tech savy person on the
          planet. Not too long ago I could not even explane what a server was
          but the curosity was there to learn this vast space of development.
        </p>
      </div>
    </main>
  );
}

export default BlogPost;

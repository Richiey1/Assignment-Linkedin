import React from "react";

function FeedPost({ username, time, message, imgSrc, loading, height, alt, id, className, children }) {
  return (
    <div className="post">
      <h2>Temitope Olubire</h2>
      <p>4 days ago</p>
      <p>I'm leading a protest, and you have to join me so we can win!</p>
      <img
        src="https://media.licdn.com/dms/image/v2/D4E22AQGkf003DttjGg/feedshare-shrink_800/feedshare-shrink_800/0/1726472759722?e=1729728000&amp;v=beta&amp;t=Os3hzcTMJAqLe7Qz7-mqzrq9kOyegBftYWIndD_ATpI"
        loading="lazy"
        height="750"
        alt="Image preview"
        id="ember219"
        className="ivm-view-attr__img--centered ivm-view-attr__img--aspect-fit update-components-image__image update-components-image__image--constrained evi-image lazy-image ember-view"
      />
      <button>Like</button>
      <button>Comment</button>
      <button>Repost</button>
    </div>
  );
}

export default FeedPost;
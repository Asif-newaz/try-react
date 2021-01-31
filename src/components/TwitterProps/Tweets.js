import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
  const tweets = [
    { name: "Asif", tweet: "React ugh, I need Alcohol" },
    { name: "Max", tweet: "I'm out taking a break" },
    { name: "Max", tweet: "I'm out taking a break" },
    { name: "Max", tweet: "I'm out taking a break" },
    { name: "Max", tweet: "I'm out taking a break" },
    { name: "Jonas", tweet: "Hey guys, I am simplified the Web" },
  ];

  return (
    <section>
      {tweets.map((tweets) => (
        <Tweet name={tweets.name} tweet={tweets.tweet} />
      ))}
    </section>
  );
};

export default Tweets;

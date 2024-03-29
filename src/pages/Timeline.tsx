import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";


const tweets = [
  "Meu primeiro Tweet",
  "Olá mundo",
  "Hello World"
]

import "./Timeline.css"

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home"/>


      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/rvkash.png" alt="Rafael Linhares" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <div className="separator"/>
      
      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
      
    </main>
  )
}
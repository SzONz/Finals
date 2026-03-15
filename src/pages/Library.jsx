import OwnedGames from "../components/Library/Main/section"
import OwnedNav from "../components/Library/Nav/section"
import "../styles/fullpage.css";

function Library() {
      
  return (
    <section className="library-main">
      <OwnedNav/>
      <OwnedGames/>
    </section>
  )
}

export default Library;
import Navbar from "../components/Navbar/nav";
import Hero from "../components/Home/HeroSection/section";
import SAE from "../components/Home/SaleAEvents/section"
import Featured from "../components/Home/Featured/section"
import Community from "../components/Home/Community/section"
import Popular from "../components/Home/popular/section"
import Stories from "../components/Home/storiesSection/section"

import freeGames from "../data/Home/Featured/free.json";
import trendingGames from "../data/Home/Featured/trending.json";
import discounts from "../data/Home/SalesEvents/discount.json";
import newReleases from "../data/Home/Hero/new-releases.json";
import reviews from "../data/Home/Community/reviews.json";
import stories from "../data/Home/SalesEvents/stories.json";
import topGames from "../data/Home/Featured/top.json";


function App() {
      
  return (
    <>
      <header>
        <Navbar/>
      </header>

       
      <main>
        <Hero data={newReleases.data} />

        <Featured
        title="Popular Free Games"
        games={freeGames}
        />
        <SAE
          title="Featured Discounts"
          items={discounts.data}
        />

        <Featured
        title="New Trending Games"
        games={trendingGames}
        />

        <Community data={reviews.data} />
        {/* <Featured
        title="Popular Free Games"
        games={Recommend base on the game you play}
        /> */}
        {/* <Featured
        title="Popular Free Games"
        games={From Developer you may know}
        /> */}
        {/* <Featured
        title="Popular Free Games"
        games={Trending among friends}
        /> */}
        <Popular data={topGames} />

        {/* <Featured
        title="Popular Free Games"
        games={Other Consoles}
        /> */}

        <Stories data={stories.data} />
      </main>

    </>
  )
}

export default App

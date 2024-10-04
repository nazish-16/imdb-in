import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <div className='max-w-6xl space-y-5 mx-auto p-3'>
        <h1 className='text-3xl font-medium text-amber-500 mt-5'>About</h1>
        <div className='space-y-3 p-4 sm:p-0'>
        <li>
        Welcome to our movie database website! We are a team of passionate movie
        enthusiasts who have come together to create a one-stop destination for
        all your movie-related needs.
      </li>

      <li>
        IMDb (Internet Movie Database) is the world's most popular and authoritative 
        source for movie, TV, and celebrity content. Established in 1990, IMDb provides 
        comprehensive information on films, television shows, actors, directors, and other
        entertainment industry professionals. From blockbuster hits to indie gems, IMDb 
        allows users to explore in-depth data on thousands of titles, including cast, crew, 
        plot summaries, user reviews, and much more.
      </li>

      <li>
        In addition to our extensive movie database, we also offer a platform
        for movie lovers to connect and share their thoughts on the latest
        releases. Our community section includes a forum where you can discuss
        your favorite films with like-minded individuals and read reviews and
        ratings from other users. We also have a section dedicated to movie news
        and trailers, keeping you updated with the latest happenings in the
        world of cinema. Thank you for visiting our website and we hope you
        enjoy your time browsing through our movie database. If you have any
        feedback or suggestions, please feel free to contact us. We are always
        looking for ways to improve and enhance the user experience on our
        website. Happy browsing!
      </li>
      <li>
        Our mission is to empower fans and filmmakers with up-to-date and reliable information, 
        connecting audiences to their favorite stories and creators. Whether you're looking for 
        the latest box office results, top-rated TV shows, or biographies of your favorite stars, 
        IMDb offers a one-stop destination for all things entertainment.
      </li>
        <li>
        With millions of contributors and an expansive database, IMDb is the ultimate 
        platform for discovering and discussing films and TV from around the world.
        </li>
    </div>
    </div>
    </div>
  )
}

export default page
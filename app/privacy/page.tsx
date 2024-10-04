import React from 'react'
import Header from '@/components/Header'

const page = () => {
  return (
    <div>
        <Header/>
        <div className='max-w-6xl space-y-5 mx-auto p-3'>
        <h1 className='text-3xl font-medium text-amber-500 mt-5'>IMDb Privacy Notice</h1>
        <div className='space-y-3 p-4 sm:p-5'>
        <li>
        We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how IMDb, IMDbPro, and Box Office Mojo (collectively "IMDb") collect and process your personal information through IMDb websites, services, and applications that reference this Privacy Notice (together the "IMDb Services"). By using the IMDb Services, you are consenting to the practices described in this Privacy Notice.
      </li>

      <li>
      IMDb's cookies allow you to take advantage of some of IMDb's essential features. For instance, if you block or otherwise reject our cookies, you will not be able to contribute content, review films, add items to your Watchlist, or use any IMDb Services that require you to sign in.
      Approved third parties may also set cookies when you interact with IMDb Services. Third parties include providers of measurement and analytics services, social media networks, ad networks, ad serving companies, and advertising companies. Third parties use cookies in the process of delivering content, including ads relevant to your interests, to measure the effectiveness of their ads, and to perform services on behalf of IMDb. They may automatically receive an IP address when this happens. 
      </li>

      <li>
      You can manage browser cookies through your browser settings. The 'Help' feature on most browsers will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie, how to block cookies, and when cookies will expire. If you block all cookies on your browser, neither we nor third parties will transfer cookies to your browser. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some features and services may not work.
      </li>
      <li>
      Use of Third-Party Advertising Services: We provide ad-serving companies, ad networks and advertising companies with information that allows them to serve you with more useful and relevant ads and to measure their effectiveness. We never share your name or other information that directly identifies you when we do this. Instead, we use an advertising identifier like a cookie or other device identifier. For example, we may share a cookie or advertising identifier together with a request to deliver an advertisement with an ad network to enable you to receive more relevant ads. As an additional example, if you have already downloaded one of our apps, we will share your advertising identifier and data about that event so that you will not be served an ad to download the app again. Some ad companies also use this information to serve you relevant ads from other advertisers.  You can learn more about how to opt-out of personalized advertising (such as cross-context behavioral advertising) by going to the  Your Ads Privacy Choices   page. 
      </li>
        <li>
         In addition, to the extent required by applicable law, you may have the right to request access to or delete your personal information. If you wish to do any of these things, please contact the IMDb Help Center. Depending on your data choices, certain services may be limited or unavailable.
        </li>
    </div>
    </div>
    </div>
  )
}

export default page
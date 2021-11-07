import React from 'react';
import PopularDestination from '../PopularDestination/PopularDestination';
import PopularPlace from '../PopularPlace/PopularPlace';
import RecentTrips from '../RecentTrips/RecentTrips';

const Home = () => {
    return (
      <div>
        {/* <Banner></Banner> */}
        <PopularDestination></PopularDestination>
        <PopularPlace></PopularPlace>
        <RecentTrips></RecentTrips>
      </div>
    );
};

export default Home;
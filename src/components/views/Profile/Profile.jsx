import React, { Component } from "react";
import Header from '@components/commons/Header';
import Footer from '@components/commons/utilities/Footer';
import BigProfile from './BigProfile';
import ProfileResult from "./Profile-Result";
import './Profile.scss';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        isAuthenticated: true,
        username: 'adex001'
      },
      profile: {
        firstname: 'Adeoye',
        lastname: 'Olatunbosun',
        avatar: 'https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png',
        username: 'adex001',
        bio: null,
        phone: null,
        location: null,

      },
      tabs: [ 'Profile', 'Articles', 'Bookmarks' ],
      clickedTab: 'Articles',
    }
  }
  render() {
    const { tabs, user, profile, clickedTab } = this.state;
    return (
      <div className="flex flex-col full-height">
        <div className='bg-gray-100 font-sans w-full m-0'>
          <Header user={user} profile={profile} />
        </div>
        <div className="center-item">
          <BigProfile profile={profile} />
        </div>
        <ul className="flex center-item py-2 border-b-2 font-sans small-font-size ">
          {tabs.map(tab => {
            return (
              <li key={tab} className="w-20 text-center">
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    this.setState({
                      clickedTab: tab
                    })
                  }} 
                  href={tab}
                  className={`${(tab === clickedTab ? 'active': '')} text-center mr-8 text-gray text-sm hover:font-bold px-5`}
                >
                  {tab}
                </a>
              </li>

            )
          })}
        </ul>
        <div className="flex-1">
          <ProfileResult tab={clickedTab} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;


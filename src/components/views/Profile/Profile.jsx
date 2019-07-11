import React, { Component } from 'react';
import ProfileCard from '@components/common/profileCard';
import ProfileNav from '@components/common/ProfileNav';
import ProfileResult from './Profile-Result';

class Profile extends Component {
  constructor(){
    super();
    this.state = {
      currentPage: '',
    }
  }
  render() {
    return (
      <>
        <div className="header">HEADER GOES HERE</div>
        <ProfileCard name="Olatunbosun Adeoye" src='https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id898295896?k=6&m=898295896&s=612x612&w=0&h=Stfj8rYlJ1QKUt7M9Lv7Dplxl-k9VHEdzZwqzNqifew=' />
        <ProfileNav />
        <ProfileResult />
        <div className="footer">FOOTER GOES HERE</div>

      </>
    )
  }
}

export default Profile;


import React, { Component } from "react";
import ProfileCard from "@components/common/profileCard";
import ProfileResult from "./Profile-Result";
import '../../common/Common.scss';


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      tab: ""
    };
  }

  handleTabChange = tab => {
    this.setState({ tab });
  };
  render() {
    const { tab } = this.state;
    return (
      <div>
        <div className="header">HEADER GOES HERE</div>
        <ProfileCard
          name="Olatunbosun Adeoye"
          src="https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id898295896?k=6&m=898295896&s=612x612&w=0&h=Stfj8rYlJ1QKUt7M9Lv7Dplxl-k9VHEdzZwqzNqifew=" 
          time='4 seconds'
          edit="EDIT PROFILE"
        />
        <nav className="center-item border-b-2 font-sans small-font-size ">
          <button
            type="button"
            onClick={() => this.handleTabChange("profile")}
            className="mr-8 text-gray text-sm font-thin hover:font-bold hover-b"
          >
            Profile
          </button>
          <button
            type="button"
            onClick={() =>this.handleTabChange("article")}
            className="mr-8 text-gray text-sm font-thin hover:font-bold hover-b active"
          >
            Article
          </button>
          <button
            type="button"
            onClick={() =>this.handleTabChange("bookmarks")}
            className="text-gray text-sm font-thin hover:font-bold hover-b"
          >
            Bookmarks
          </button>
        </nav>
        <ProfileResult tab={tab} />
        <div className="footer">FOOTER GOES HERE</div>
      </div>
    );
  }
}

export default Profile;

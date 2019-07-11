import React from "react";
import PropTypes from "prop-types";
import DisplayStar from "./displayStar";
import ReadTime from "./readTime";

const logger = console;
export default function ProfileCard({ time, name, averageRating, src }) {
  logger.log(averageRating);
  return (
    <div className="p-12">
      <div className="block w-full font-sans">
        <div className="rounded rounded-t-lg overflow-hidden shadow my-3">
          <div className="bg-white h-3" />
          <div className="flex -mt-2">
            <img
              src={src}
              className="rounded-full border-solid border-white border-2 m-4 w-20 h-20"
              alt="profile"
            />
            <div className="flex content-center flex-wrap px-2 p-4 ">
              <p className="text-black text-sm bold font-sans w-full">
                {name}
              </p>
              <ReadTime time={time} />
              <p className="text-black text-sm bold font-sans w-full">
                <DisplayStar averageRating={averageRating} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileCard.defaultProps = {
  time: "4 mins",
  averageRating: 3
};

ProfileCard.propTypes = {
  time: PropTypes.string,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  averageRating: PropTypes.number
};

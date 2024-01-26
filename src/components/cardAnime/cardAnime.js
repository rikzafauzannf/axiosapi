import React from "react";
import Image from "next/image";

const CardAnime = ({ img, title, type, status, score, season, background }) => {
  return (
    <>
      <div className="card w-96 bg-neutral shadow-xl">
        <figure className="relative">
          <Image
            src={img}
            alt="..."
            width={100}
            height={100}
            className="w-full h-[500px] object-fill"
          />
          <div className="absolute top-2 right-2 badge badge-primary">
            Sesason: {season}
          </div>
        </figure>
        <div className="card-body relative">
          <div className="w-full flex justify-between items-center mb-10">
            <h2 className="card-title">{title}</h2>
            <div className="italic border-l-2 pl-1 font-bold">{type}</div>
          </div>
          <div className="card-actions justify-end ">
            <div className="badge badge-outline">{status}</div>
            <div className="badge badge-outline">
              {"score: "}
              {score}
            </div>
          </div>
          {background && (
            <div className="collapse bg-neutral-800/50 w-full mt-4">
              <input type="checkbox" />
              <div className="collapse-title text-sm font-light">
                Tentang Anime
              </div>
              <div className="collapse-content">
                <p>{background}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardAnime;

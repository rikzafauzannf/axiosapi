import CardAnime from "@/components/cardAnime/cardAnime";
import React from "react";
import anime from "./api/anime";
const Home = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  // );
  // const anime = await response.json();
  // console.log(anime);
  return (
    <>
      <div className="p-5 shadow-2xl mb-5 flex flex-col md:flex-row items-center justify-between">
        <h1 className="font-bold text-4xl md:text-8xl italic">
          NOBAR ANIME GRATIS
        </h1>
        <div className="text-left md:text-right">
          <h2 className="text-xl md:text-2xl italic ">
            Siapkan Cemilan dan Mulai Hiburan Anda di Sini
          </h2>
          <p>Ceritakan Film indahmu yang bajakan itu</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {anime.data.map((item, key) => {
          return (
            <>
              <CardAnime
                key={key.mal_id}
                img={item.images.webp.image_url}
                title={item.title}
                background={item.background}
                status={item.status}
                score={item.score}
                type={item.type}
                season={item.season}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;

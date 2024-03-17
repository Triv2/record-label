import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <div className="text-center justify-center items-center flex flex-col gap-8 uppercase">
      <span className="max-w-2xl font-medium text-4xl">
        WE CREATE AND SHARE EXPERIENCES. HANDMADE WITH LOVE.
      </span>

      <div className="gap-12 grid grid-cols-2 md:grid-cols-4 text-lg tracking-tighter">
        <Link className="underline" href={"/artists"}>
          Artists
        </Link>
        <Link
          className="underline"
          href={"/https://www.youtube.com/c/sOULPUNXWorld"}
        >
          Youtube
        </Link>
        <Link className="underline" href={"/releases"}>
          Releases
        </Link>
        <Link className="underline" href={"/film"}>
          Film
        </Link>
      </div>
    </div>
  );
};

export default Links;

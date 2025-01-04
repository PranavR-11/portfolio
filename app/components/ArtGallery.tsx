"use client";
import Image from 'next/image';
import React from "react";

const ArtGallery = () => {
  return (
    <section id="artgallery" className="py-16 bg-transparent text-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6">Art Gallery</h2>
        <div
          className="grid gap-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            justifyItems: "center",
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/art/black-panther.jpg`}
            alt="Black Panther Art"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
                    <Image
            src="/art/dws.jpeg"
            alt="Die With A Smile Art"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
                    <Image
            src="/art/chandler.jpeg"
            alt="Chandler Art"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
                    <Image
            src="/art/dv.jpeg"
            alt="Darth Vader Art"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
                    <Image
            src="/art/strange.jpeg"
            alt="Doctor Strange Art"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
                    <Image
            src="/art/mk.jpeg"
            alt="Moon Knight Art"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
                    <Image
            src="/art/spidergewn.jpeg"
            alt="Spider Gwen"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
          <Image
            src="/art/messi.jpeg"
            alt="Messi Art"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
          <Image
            src="/art/3spiderman.jpeg"
            alt="3 Spidermen"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />

          <Image
            src="/art/alvarez.jpeg"
            alt="Alvarez Art"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
          <Image
            src="/art/lucifer.jpeg"
            alt="Lucifer Silhouette"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />

          <Image
            src="/art/painting1.jpeg"
            alt="Painting 1"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
          <Image
            src="/art/painting2.jpeg"
            alt="Painting 2"
            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
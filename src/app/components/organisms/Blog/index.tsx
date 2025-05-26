"use client";
import React, { useState } from "react";
import { Label } from "../../atoms";
import { BoxBlog } from "../../molecules";

const Blog = () => {
  const [tabSelected, setTabSelected] = useState<string>("javascript");
  const [toggle, setToggle] = useState<number>(0);
  const toggleHandler = (index: number) => {
    setToggle(index);
  };

  return (
    <div className="max-w-[1264px] w-full mx-auto z-30 mt-40">
      {/* Tab */}
      <div className="flex flex-col space-y-10">
        <div className="w-full flex flex-col items-center justify-center">
          <Label text="Blog" />

          <div className="w-full z-30 overflow-hidden ">
            <ul className="tab-blog w-full flex flex-wrap gap-3 space-x-4 mt-2 justify-around sm:justify-center text-xl font-semibold primary-color">
              <li
                className={`relative ${tabSelected === "javascript" ? "active" : ""}`}
                onClick={() => setTabSelected("javascript")}
              >
                Javascript
              </li>
              <li
                className={`relative ${tabSelected === "golang" ? "active" : ""}`}
                onClick={() => setTabSelected("golang")}
              >
                Golang
              </li>
              <li
                className={`relative ${tabSelected === "blockchain" ? "active" : ""}`}
                onClick={() => setTabSelected("blockchain")}
              >
                BlockChain
              </li>
            </ul>
          </div>
        </div>

        {/* end Tab */}

        {/* Tab Content Block Chain */}

        {/* Content */}
        <div
          className={` ${tabSelected === "javascript" ? "block" : "hidden"}`}
        >
          javascript
        </div>
        <div className={`  ${tabSelected === "golang" ? "block" : "hidden"}`}>
          golang
        </div>
        <div
          className={`  ${tabSelected === "blockchain" ? "block" : "hidden"}`}
        >
          <div className="box-content-blog relative overflow-x-hidden w-auto">
            <div className="content-blog w-auto inline-block whitespace-nowrap ">
              <div className="inline-flex w-full justify-start  mt-8">
                <BoxBlog
                  imageContent="manworking.jpg"
                  authorName="Tofan 2s"
                  times="7 mins"
                  title=" Blockchain untuk Pemula: Memahami Konsep Dasar dan Cara Kerjanya"
                  url="/blockchain-untuk-pemula-memahami-konsep-dasar-dan-cara-kerjanya"
                  imageAuthor="picture.png"
                  content="Blockchain (rantai blok) adalah buku besar digital (ledger) terdesentralisasi yang mencatat semua transaksi dalam jaringan secara transparan dan aman. Data disimpan dalam blok-blok yang saling terhubung (seperti rantai) dan didistribusikan ke banyak komputer (node) di seluruh dunia."
                  setToggle={toggleHandler}
                  index={1}
                  toggle={toggle}
                />
                <BoxBlog
                  imageContent="manworking2.jpg"
                  authorName="Tofan"
                  times="7 mins"
                  title=" Blockchain untuk Pemula: Memahami Konsep Dasar dan Cara Kerjanya"
                  url="/blockchain-untuk-pemula-memahami-konsep-dasar-dan-cara-kerjanya"
                  imageAuthor="picture.png"
                  content="Blockchain (rantai blok) adalah buku besar digital (ledger) terdesentralisasi yang mencatat semua transaksi dalam jaringan secara transparan dan aman. Data disimpan dalam blok-blok yang saling terhubung (seperti rantai) dan didistribusikan ke banyak komputer (node) di seluruh dunia."
                  setToggle={toggleHandler}
                  index={2}
                  toggle={toggle}
                />
                <BoxBlog
                  imageContent="manworking3.jpg"
                  authorName="Tofan"
                  times="7 mins"
                  title=" Blockchain untuk Pemula: Memahami Konsep Dasar dan Cara Kerjanya"
                  url="/blockchain-untuk-pemula-memahami-konsep-dasar-dan-cara-kerjanya"
                  imageAuthor="picture.png"
                  content="Blockchain (rantai blok) adalah buku besar digital (ledger) terdesentralisasi yang mencatat semua transaksi dalam jaringan secara transparan dan aman. Data disimpan dalam blok-blok yang saling terhubung (seperti rantai) dan didistribusikan ke banyak komputer (node) di seluruh dunia."
                  setToggle={toggleHandler}
                  index={3}
                  toggle={toggle}
                />
                <BoxBlog
                  imageContent="manworking2.jpg"
                  authorName="Tofan"
                  times="7 mins"
                  title=" Blockchain untuk Pemula: Memahami Konsep Dasar dan Cara Kerjanya"
                  url="/blockchain-untuk-pemula-memahami-konsep-dasar-dan-cara-kerjanya"
                  imageAuthor="picture.png"
                  content="Blockchain (rantai blok) adalah buku besar digital (ledger) Blockchain (rantai blok) adalah buku besar digital (ledger) Blockchain (rantai blok) adalah buku besar digital (ledger) Blockchain (rantai blok) adalah buku besar digital (ledger)  terdesentralisasi yang mencatat semua transaksi dalam jaringan secara transparan dan aman. Data disimpan dalam blok-blok yang saling terhubung (seperti rantai) dan didistribusikan ke banyak komputer (node) di seluruh dunia."
                  setToggle={toggleHandler}
                  index={3}
                  toggle={toggle}
                />
              </div>
              <div className="inline-flex w-full justify-start  mt-8">
                <BoxBlog
                  imageContent="manworking.jpg"
                  authorName="Tofan 2s"
                  times="7 mins"
                  title=" Blockchain untuk Pemula: Memahami Konsep Dasar dan Cara Kerjanya"
                  url="/blockchain-untuk-pemula-memahami-konsep-dasar-dan-cara-kerjanya"
                  imageAuthor="picture.png"
                  content="Blockchain (rantai blok) adalah buku besar digital (ledger) terdesentralisasi yang mencatat semua transaksi dalam jaringan secara transparan dan aman. Data disimpan dalam blok-blok yang saling terhubung (seperti rantai) dan didistribusikan ke banyak komputer (node) di seluruh dunia."
                  setToggle={toggleHandler}
                  index={1}
                  toggle={toggle}
                />
                <BoxBlog
                  imageContent="manworking2.jpg"
                  authorName="Tofan"
                  times="7 mins"
                  title=" Blockchain untuk Pemula: Memahami Konsep Dasar dan Cara Kerjanya"
                  url="/blockchain-untuk-pemula-memahami-konsep-dasar-dan-cara-kerjanya"
                  imageAuthor="picture.png"
                  content="Blockchain (rantai blok) adalah buku besar digital (ledger) terdesentralisasi yang mencatat semua transaksi dalam jaringan secara transparan dan aman. Data disimpan dalam blok-blok yang saling terhubung (seperti rantai) dan didistribusikan ke banyak komputer (node) di seluruh dunia."
                  setToggle={toggleHandler}
                  index={2}
                  toggle={toggle}
                />
                <BoxBlog
                  imageContent="manworking3.jpg"
                  authorName="Tofan"
                  times="7 mins"
                  title=" Blockchain untuk Pemula: Memahami Konsep Dasar dan Cara Kerjanya"
                  url="/blockchain-untuk-pemula-memahami-konsep-dasar-dan-cara-kerjanya"
                  imageAuthor="picture.png"
                  content="Blockchain (rantai blok) adalah buku besar digital (ledger) terdesentralisasi yang mencatat semua transaksi dalam jaringan secara transparan dan aman. Data disimpan dalam blok-blok yang saling terhubung (seperti rantai) dan didistribusikan ke banyak komputer (node) di seluruh dunia."
                  setToggle={toggleHandler}
                  index={3}
                  toggle={toggle}
                />
                <BoxBlog
                  imageContent="manworking2.jpg"
                  authorName="Tofan"
                  times="7 mins"
                  title=" Blockchain untuk Pemula: Memahami Konsep Dasar dan Cara Kerjanya"
                  url="/blockchain-untuk-pemula-memahami-konsep-dasar-dan-cara-kerjanya"
                  imageAuthor="picture.png"
                  content="Blockchain (rantai blok) adalah buku besar digital (ledger) terdesentralisasi yang mencatat semua transaksi dalam jaringan secara transparan dan aman. Data disimpan dalam blok-blok yang saling terhubung (seperti rantai) dan didistribusikan ke banyak komputer (node) di seluruh dunia."
                  setToggle={toggleHandler}
                  index={3}
                  toggle={toggle}
                />
              </div>
            </div>
          </div>
        </div>

        {/* endContent */}

        {/* Tab Content Block Chain */}
      </div>
    </div>
  );
};

export default Blog;

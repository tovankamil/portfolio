import React from "react";
import { Footer, Navbar } from "@/app/components";
import Image from "next/image";
import DetailBlogRightPosition from "@/app/components/organisms/DetailBlogRightPosition";

const index = () => {
  return (
    <div
      style={{
        backgroundImage: `url("http://localhost:3000/icons/box2.svg")`,
        backgroundSize: "contain", // or 'contain' based on your needs
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* nav menu */}
      <Navbar />
      {/* end nav menu */}
      {/* Content */}
      <div className="max-w-[1264px] w-full mx-auto mt-20 sm:mt-40 z-50 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row items-start z-50">
          {/* Left */}
          <div className="w-full sm:w-8/12">
            <article>
              <div className="flex flex-col justify-center items-center space-y-14">
                {/* Image */}
                <div className="flex flex-col space-y-4">
                  <figure className="space-y-2">
                    <div className="w-full flex justify-end">
                      <time
                        dateTime="2024-05-26"
                        className="text-xs font-semibold primary-color "
                      >
                        May 26, 2025
                      </time>
                    </div>

                    <div className="w-full h-80 overflow-hidden relative">
                      <Image
                        src={`/images/manworking.jpg`}
                        alt="html"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <figcaption>
                        Improve your blog's SEO with these tips.
                      </figcaption>
                    </div>
                  </figure>
                  {/* title */}
                  <h1 className="detailblog line-clamp-3 whitespace-normal  primay-color">
                    Mengenal Teknologi Blockchain dan Manfaatnya untuk Bisnis
                  </h1>
                  {/* end title */}
                </div>
                {/* End Image */}
                {/* Author */}
                <div className="flex flex-row items-center space-x-2">
                  <Image
                    src={`/picture.png`}
                    width={32}
                    height={32}
                    alt="html"
                    className="z-30 border-2 rounded-full w-12 h-12 border-gray-400"
                  />
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="px-4 py-0.5  rounded-3xl text-[14px] font-semibold bg-gray-200 ">
                      Tofan
                    </div>
                    <div className="text-[14px] font-medium">Author</div>
                  </div>
                </div>
                {/* End Author */}
                {/* Content */}

                <div className="mt-16 z-50">
                  <h2 className="z-50">Pengertian Blockchain</h2>
                  <p>
                    Blockchain (rantai blok) adalah buku besar digital (
                    <em>ledger</em>) terdesentralisasi yang mencatat semua
                    transaksi dalam jaringan secara transparan, aman, dan tidak
                    dapat diubah. Setiap transaksi disimpan dalam "blok" yang
                    terhubung satu sama lain membentuk rantai (<em>chain</em>),
                    sehingga disebut <em>blockchain</em>.
                  </p>

                  <div className="highlight">
                    <p>
                      Teknologi ini pertama kali diperkenalkan pada tahun 2008
                      oleh Satoshi Nakamoto sebagai dasar untuk mata uang kripto
                      Bitcoin. Namun, kini blockchain telah berkembang dan
                      digunakan di berbagai sektor, seperti keuangan, logistik,
                      kesehatan, dan pemerintahan.
                    </p>
                  </div>
                </div>

                <div>
                  <h2>Cara Kerja Blockchain</h2>
                  <ol>
                    <li>
                      <strong>Desentralisasi</strong> – Tidak ada otoritas pusat
                      yang mengontrol blockchain. Data disimpan di banyak
                      komputer (<em>nodes</em>) dalam jaringan.
                    </li>
                    <li>
                      <strong>Transaksi dan Validasi</strong> – Ketika transaksi
                      terjadi, jaringan memverifikasinya melalui mekanisme
                      konsensus (seperti <em>Proof of Work</em> atau{" "}
                      <em>Proof of Stake</em>).
                    </li>
                    <li>
                      <strong>Pembentukan Blok</strong> – Transaksi yang
                      divalidasi dikelompokkan dalam blok dan ditambahkan ke
                      rantai blok sebelumnya.
                    </li>
                    <li>
                      <strong>Immutability (Ketidakubahan)</strong> – Setelah
                      blok ditambahkan, data tidak dapat diubah atau dihapus,
                      menjamin keamanan dan transparansi.
                    </li>
                  </ol>
                </div>

                <div>
                  <h2 className="advantages">Keunggulan Blockchain</h2>
                  <ul>
                    <li>
                      <strong>Transparansi</strong> – Semua transaksi tercatat
                      dan dapat diverifikasi oleh semua pihak.
                    </li>
                    <li>
                      <strong>Keamanan Tinggi</strong> – Menggunakan kriptografi
                      untuk mencegah peretasan dan penipuan.
                    </li>
                    <li>
                      <strong>Efisiensi</strong> – Menghilangkan perantara,
                      mengurangi biaya, dan mempercepat proses.
                    </li>
                    <li>
                      <strong>Desentralisasi</strong> – Tidak bergantung pada
                      satu entitas, mengurangi risiko kegagalan sistem.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2>Contoh Penerapan Blockchain</h2>
                  <ul>
                    <li>
                      <strong>Mata Uang Kripto</strong> (Bitcoin, Ethereum)
                    </li>
                    <li>
                      <strong>Smart Contract</strong> (Kontrak otomatis yang
                      dieksekusi tanpa perantara)
                    </li>
                    <li>
                      <strong>Supply Chain</strong> (Pelacakan produk dari
                      produsen ke konsumen)
                    </li>
                    <li>
                      <strong>Pemilu Digital</strong> (Mencegah kecurangan dalam
                      pemilihan umum)
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="challenges">Tantangan Blockchain</h2>
                  <ul>
                    <li>
                      <strong>Skalabilitas</strong> – Jaringan seperti Bitcoin
                      memiliki keterbatasan kecepatan transaksi.
                    </li>
                    <li>
                      <strong>Regulasi</strong> – Beberapa negara masih
                      meragukan legalitas blockchain dan aset kripto.
                    </li>
                    <li>
                      <strong>Konsumsi Energi</strong> – <em>Mining</em> Bitcoin
                      membutuhkan daya komputasi besar dan boros energi.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2>Kesimpulan</h2>
                  <p>
                    Blockchain adalah teknologi revolusioner yang mengubah cara
                    penyimpanan dan pertukaran data. Meski masih memiliki
                    tantangan, potensinya dalam meningkatkan keamanan,
                    transparansi, dan efisiensi sangat besar. Di masa depan,
                    blockchain diperkirakan akan semakin terintegrasi dalam
                    berbagai aspek kehidupan digital.
                  </p>
                </div>

                <div className="reference">
                  <h3>Referensi</h3>
                  <ul>
                    <li>
                      Nakamoto, S. (2008).{" "}
                      <em>Bitcoin: A Peer-to-Peer Electronic Cash System</em>.
                    </li>
                    <li>
                      Tapscott, D. (2016). <em>Blockchain Revolution</em>.
                    </li>
                  </ul>
                </div>
                {/* end Content */}
              </div>
            </article>
          </div>
          {/* Left */}

          {/* Right */}
          <DetailBlogRightPosition />
          {/* End Right */}
        </div>
        <div></div>
      </div>
      <Footer />
      {/* end Content */}
    </div>
  );
};

export default index;

/* eslint-disable jsx-a11y/alt-text */
import {
  COMPONENT_PARAGRAPH,
  COMPONENT_SECTION_HEADER,
} from "@/data/component-front";
import { Image } from "@/stories/Image";
import { Paragraph } from "@/stories/Paragraph";
import SectionGroup from "@/stories/SectionGroup";
import { SectionHeader } from "@/stories/SectionHeader";

export default function Home() {
  return (
    <main className="min-h-screen w-screen relative">
      <SectionHeader
        block={{
          component: COMPONENT_SECTION_HEADER,

          componentProps: {
            coverImage: "/assets/cover.png",
            title: "Ada Gempa, Kita Harus Ngapain?",
          },
        }}
      />
      <SectionGroup
        className="bg-[#F1F0ED] mx-auto min-h-screen px-10 md:px-40 xl:px-[30rem]"
        sectionId="section--4"
      >
        <Paragraph
          block={{
            component: COMPONENT_PARAGRAPH,
            componentProps: {
              className: "py-8 text-black",
              children: (
                <>
                  <p>
                    Tiga prinsip dasar itu perlu dilakukan, namun tidak boleh
                    secara sembarangan. Ada beberapa hal yang perlu dicermati
                    agar drop, cover, dan hold bisa menghasilkan perlindungan
                    secara maksimal. Benda-benda yang bisa jatuh menimpa badan,
                    seperti jendela kaca, rak, lemari, maupun barang-barang yang
                    tergantung, yakni lukisan, cermin, jam dinding, dan lampu
                    gantung wajib dihindari. Segera lindungi kepala menggunakan
                    kedua tangan atau benda di sekitar. “Jika di dalam ruangan
                    serba kaca, berlindung di bawah meja. Kalau tidak ada meja,
                    cari hal lain yang bisa melindungi kepala kita dari
                    kejatuhan material,” kata Abah Lala. Posisi tubuh dan lokasi
                    di mana Kawan berada juga patut diperhatikan. Apabila Kawan
                    sedang dalam keadaan tidur atau berbaring, tutuplah kepala
                    menggunakan bantal untuk melindungi kepala dari benda-benda
                    yang jatuh.
                  </p>
                </>
              ),
            },
          }}
        />
        <Image
          block={{
            component: 2,
            componentProps: {
              imageAlt: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
              imageUrl: "/assets/1.png",
            },
          }}
        />
        <Paragraph
          block={{
            component: COMPONENT_PARAGRAPH,
            componentProps: {
              className: "py-8 text-black",
              children: (
                <>
                  <p>
                    Jika Kawan berada di lantai satu bangunan, segeralah keluar
                    dan menuju tempat terbuka apabila memungkinkan, tentu sambil
                    tetap lindungi kepala dan leher mengunakan kedua tangan atau
                    benda lainnya. Keluar dari bangunan dengan segera bisa jadi
                    sulit apabila seseorang sedang berada di lantai dua atau
                    lebih tinggi. Jika menghadapi situasi ini, berlindunglah di
                    bawah meja yang kokoh sambil memegang kaki meja agar tidak
                    bergeser, lalu lekas merapat ke dinding bagian pojok dengan
                    merunduk seraya melindungi kepala. Dinding dekat elevator
                    juga cocok untuk jadi tempat berlindung karena bagian itu
                    adalah konstruksi terkuat sebuah gedung. Setelah gempa reda,
                    barulah evakuasi diri ke titik kumpul yang aman guna
                    mengantisipasi gempa susulan. “Selama gempa harus segera
                    mepet ke dinding. Kalau di tengah khawatir tertimpa dari
                    atas,” imbuh Abah Lala. Saat terjadi gempa, biasanya
                    pengelola gedung melarang penggunaan elevator. Namun jika
                    Kawan sedang berada di dalamnya, yang perlu dilakukan adalah
                    tekan tombol semua lantai, dan segeralah keluar saat pintu
                    terbuka di lantai berapa pun. Jika pintu tak terbuka, tekan
                    tombol darurat untuk memanggil bantuan. Kemungkinan terburuk
                    yang bisa saja terjadi adalah terjebak dalam ruangan atau
                    tertimpa benda sehingga tidak dapat bergerak. Jika hal itu
                    terjadi, jangan habiskan energi dengan terus-menerus
                    berteriak. Lebih baik ketuk benda yang ada untuk memberi
                    tanda agar segera mendapatkan pertolongan.
                  </p>
                </>
              ),
            },
          }}
        />
        <Image
          block={{
            component: 2,
            componentProps: {
              imageAlt: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
              imageUrl: "/assets/2.png",
            },
          }}
        />
        <Paragraph
          block={{
            component: COMPONENT_PARAGRAPH,
            componentProps: {
              className: "py-8 text-black",
              children: (
                <>
                  <p>
                    Mitigasi bencana bisa dilakukan dalam berbagai macam cara.
                    Mengacu kepada UU Nomor 24 Tahun 2007 tentang Penanggulangan
                    Bencana, langkah mitigasi dapat berwujud peningkatan
                    kemampuan menghadapi ancaman bencana maupun pembangunan
                    fisik. Bagi masyarakat Indonesia yang sehari-harinya hidup
                    di bawah bayang-bayang gempa, memahami apa yang harus
                    dilakukan saat gempa terjadi sudah tentu jadi keharusan.
                    Tujuan utamanya, sudah tentu menyelamatkan diri secepat
                    mungkin. Untuk mengetahui apa saja yang perlu dilakukan guna
                    menyelamatkan diri saat terjadi gempa, utamanya yang
                    berkekuatan besar dan berlangsung lama, GNFI berkesempatan
                    berbincang dengan Anis Faisal Reza atau yang biasa dikenal
                    sebagai Abah Lala, Ketua Komunitas Gugus Mitigasi Lebak
                    Selatan (GMLS).Menurut Abah Lala, jika getaran gempa cukup
                    besar, masyarakat harus mencari perlindungan di titik
                    terdekat, misalnya di kolong meja kayu yang cukup kuat atau
                    sekedar menutup kepala dengan tangan. “Saat gempa itu adalah
                    posisi kritis. Apalagi saat kita di tempat yang tinggi, kita
                    tidak akan bisa menempuh perjalanan ke basement dalam waktu
                    yang singkat. (Saat terjadi) Gempa besar dan berayun, lama
                    berlari malah akan menambah resiko yang baru, bisa jatuh,”
                    ujar Abah Lala. Langkah tersebut menjadi sangat penting,
                    apalagi saat Kawan GNFI tengah berada di lokasi yang tinggi
                    seperti lantai atas gedung. Mencari perlindungan terdekat
                    lebih baik baik ketimbang berusaha lari dan turun ke lantai
                    dasar karena tindakan tersebut justru berbahaya. Abah Lala
                    menyebut ada tiga prinsip utama untuk menyelamatkan diri
                    saat terjadi gempa, yakni drop, cover, dan hold. Drop
                    berarti mengubah posisi dengan menunduk, berjongkok, atau
                    sujud. Posisi ini dapat meminimalisir Kawan merasakan pusing
                    dan limbung saat terjadi getaran. Cover artinya menutupi dan
                    melindungi kepala dengan tangan, tas atau benda lain.
                    Kemudian, langkah ketiga ialah hold yang artinya berpegangan
                    erat agar tidak limbung.
                  </p>
                </>
              ),
            },
          }}
        />
        <Image
          block={{
            component: 2,
            componentProps: {
              imageAlt: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
              imageUrl: "/assets/3.png",
            },
          }}
        />
      </SectionGroup>
      {/* <SectionGroup sectionId="4">
        
        <Image
          block={{
            component: 2,
            componentProps: {
              imageAlt: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
              imageUrl: "/assets/cover.png",
            },
          }}
        />{" "}
      </SectionGroup> */}
    </main>
  );
}

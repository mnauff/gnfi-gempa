"use client"

import { baseUrl } from "@/constants/meta"
import { COMPONENT_PARAGRAPH, COMPONENT_SECTION_HEADER } from "@/data/component-front"
import { Paragraph } from "@/stories/Paragraph"
import { SectionHeader } from "@/stories/SectionHeader"
import { motion } from 'framer-motion'
export function SectionFiveComponent() {
    return <div style={{ backgroundImage: `url(${baseUrl}/assets/5.2.png)` }} className="bg-repeat overflow-clip">
        <SectionHeader block={{
            component: COMPONENT_SECTION_HEADER,
            componentProps: {
                title: "Pola Hidup Sehat, Jurus Jitu Mencegah Kanker",
                coverImage: `assets/5.1.png`,
                className: 'bg-top'
            }
        }} />
        <Paragraph block={{
            component: COMPONENT_PARAGRAPH,
            componentProps: {
                children: (
                    <>
                        <p>Mencegah lebih baik daripada mengobati. Ungkapan itu agaknya perlu diresapi oleh Kawan GNFI yang memiliki awareness terhadap kanker. Dengan begitu banyak cara untuk mengobati kanker, mencegahnya tetap selalu jadi jalan terbaik.</p>
                        <p>Kunci pencegahan kanker terletak pada pola hidup. Semakin sehat pola hidup seseorang, semakin kecil kemungkinan mereka terkena penyakit ini. Hal ini disebabkan karena kanker lebih banyak dipengaruhi oleh faktor eksternal daripada faktor keturunan.</p>
                        <p>Menurut Pratiwi Astar, Humas Yayasan Kanker Indonesia, sekitar 90 persen kasus kanker disebabkan oleh faktor eksternal, sedangkan faktor genetik hanya berkontribusi sekitar 10 persen. Ini menunjukkan betapa pentingnya mengadopsi pola hidup sehat untuk menurunkan risiko terkena kanker.</p>
                        <p>"Faktor eksternal itu disebabkan oleh pola hidup, termasuk merokok, (dan jadi) perokok pasif. Maka dari itu, yang sehat-sehat ini belum tentu (sepenuhnya) sehat, karena pola hidup yang kita lakukan sekarang ini dampaknya bisa terlihat jelas 20 tahun kemudian," ujar Pratiwi pada Kamis (1/2/2024) lalu.</p>
                    </>
                )
            }
        }} />
        <div className="relative max-w-4xl mx-auto">
            <motion.img
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                src={`${baseUrl}/assets/5.3.png`} alt="Illustration 1" className="absolute" />
            <motion.img
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src={`${baseUrl}/assets/5.3.1.png`} alt="Step 1" className="" />
        </div>
        <Paragraph block={{
            component: COMPONENT_PARAGRAPH,
            componentProps: {
                children: (
                    <>
                        <p>Faktor eksternal yang paling signifikan tentu saja adalah pola hidup. Selain merokok, kebiasaan makan juga menjadi bagian penting yang perlu diperhatikan. Konsumsi makanan instan, kalengan, dan makanan olahan secara berlebihan diketahui sebagai pemicu kanker. Meskipun jenis makanan ini sangat umum dikonsumsi, bahkan oleh orang-orang muda, hal ini dapat berdampak buruk bagi kesehatan dalam jangka panjang.</p>
                        <p>Pratiwi juga mengungkapkan bahwa saat ini banyak penderita kanker yang berusia di bawah 50 tahun. Kondisi ini semakin memperkuat seruan untuk menerapkan pola hidup sehat sejak dini. Langkah-langkah seperti menjaga pola makan yang seimbang, rutin berolahraga, menghindari rokok dan alkohol, serta melakukan pemeriksaan kesehatan secara berkala sangat disarankan.</p>
                        <p>"Pola hidup tidak sehat orang yang masih muda, misalnya 15 tahun, 15 tahun kemudian saat unur 30 sudah bisa kena (kanker)," katanya.</p>
                        <p>Mengadopsi pola hidup sehat tidak hanya bermanfaat untuk mencegah kanker, tetapi juga meningkatkan kualitas hidup secara keseluruhan. Maka dari itu, penting bagi kita semua untuk mulai memperhatikan dan menerapkan gaya hidup sehat demi masa depan yang lebih baik dan bebas dari kanker.</p>
                    </>
                )
            }
        }} />
        <div className="relative max-w-4xl mx-auto">
            <motion.img
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src={`${baseUrl}/assets/5.4.png`} alt="Step 2" className="absolute" />
            <motion.img
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                src={`${baseUrl}/assets/5.4.1.png`} alt="Illustration 2" className="" />
        </div>
    </div>
}
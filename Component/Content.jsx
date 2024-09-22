import Produk from "../assets/foto-produk.jpeg"
import Logo from "../assets/logo-sadewa-removebg-preview.png"

function Content(){
    return(
        <div className="content-container">
        <div className="content1">
          <img src={Produk} alt="" />
          <span>Ketika pertama kali mencicipi bebek bakar ini, saya langsung terkesan dengan aroma rempah yang begitu kuat. Proses pembakaran yang sempurna benar-benar mengeluarkan wangi khas yang menggugah selera. Begitu disajikan, tampilan bebek dengan kulit yang sedikit kecokelatan dan renyah menambah daya tarik visualnya.</span>
          <span>Saat saya mulai menggigit, yang paling menonjol adalah tekstur dagingnya. Lembut, juicy, dan tidak kering sama sekali, yang sering menjadi masalah pada beberapa hidangan bebek. Rasanya? Luar biasa! Bumbu meresap hingga ke bagian dalam daging, menghadirkan perpaduan rasa gurih dan manis dengan sentuhan rempah yang membuat lidah tak berhenti ingin menikmatinya.</span>
        </div>
        <div className="content2">
          <span>logo yang terinspirasi dari wayang itu sangat sarat makna. Kalau kita perhatikan, elemen utama dari logo tersebut biasanya mengambil figur tokoh-tokoh wayang yang terkenal, seperti Arjuna atau Semar. Karakter-karakter ini tidak hanya ikonik, tetapi juga penuh filosofi. Mereka menggambarkan nilai-nilai moral yang tinggi dan kebijaksanaan, yang diwariskan dari cerita-cerita epos seperti Ramayana dan Mahabharata.
          </span>
          <img src={Logo} alt="" />
        </div>
      </div>
    )
}

export default Content
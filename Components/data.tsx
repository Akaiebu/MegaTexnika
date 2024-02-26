import { Iadress, Idescription, Idescriptions, Iheadlinks, Iimages, Ilinks, Imedia, Ixeber, Ixeberler, Iyenilik } from "@/Interface";
import { FaInstagram,FaFacebookF,FaTwitter  } from "react-icons/fa";

export const links:Ilinks[] = [
    { id:1, to:"/haqqimizda", title:"Haqqımızda" },
    { id:2, to:"/texnikalar", title:"Texnikalar" },
    { id:3, to:"/icare-sertleri", title:"İcarə şərtləri" },
    { id:4, to:"/blog", title:"Blog" },
    { id:5, to:"/elaqe", title:"Əlaqə" }
]
export const social_media:Imedia[] = [
    { id:1 , to:"https://www.instagram.com/" , icon: <FaInstagram/> },
    { id:2 , to:"https://www.facebook.com/" , icon: <FaFacebookF/> },
    { id:3 , to:"https://twitter.com/?lang=en" , icon: <FaTwitter/> }
]
export const adress:Iadress[] = [
    { id:1 , to:"https://maps.app.goo.gl/Qq9J46PcLzBzpVfM8" , title:"Fətəli Xan Xoyski 111A, Bakı Azərbaycan" },
    { id:1 , to:"/" , title:"+994(51) 123 45 67" },
    { id:1 , to:"/" , title:"+994(12) 123 45 67" },
    { id:1 , to:"/" , title:"info@lmegatexnika.az" }
]
export const headlinks:Iheadlinks[] = [
    { id:1, to:"/", title:"Əsas səhifə" },
    { id:2, to:"/haqqimizda", title:"Haqqımızda" },
    { id:3, to:"/texnikalar", title:"Texnikalar" },
    { id:4, to:"/icare-sertleri", title:"İcarə şərtləri" },
    { id:5, to:"/blog", title:"Blog" },
    { id:6, to:"/elaqe", title:"Əlaqə" }
]
export const images:Iimages[] = [
    { id:1 , to: "/texnikalar" , title: "Avtokranlar" , source: "/avtokran.png" },
    { id:2 , to: "/texnikalar" , title: "Traktorlar" , source: "/traktor.png" },
    { id:3 , to: "/texnikalar" , title: "Qaldırıcı səbətlər" , source: "/qaldirici-sebet.png" },
    { id:4 , to: "/texnikalar" , title: "Forkliftlər" , source: "/forklift.png" },
    { id:5 , to: "/texnikalar" , title: "Katok" , source: "/katok.png" },
    { id:6 , to: "/texnikalar" , title: "Shacman" , source: "/shacman.png" },
    { id:7 , to: "/texnikalar" , title: "Bobcat" , source: "/bobcat.png" },
    { id:8 , to: "/texnikalar" , title: "Pompa" , source: "/pompa.png" }
]
export const description:Idescription[] = [
    { id:1 , title: "Ekskavator" , il: 2022 , qiymet_ay: 1000 , qiymet_gun: 100 ,mezenne: "AZN" , source: "/ekskavator.png" },
    { id:2 , title: "Ekskavator yükləyici" , il: 2022 , qiymet_ay: 1000 , qiymet_gun: 100 ,mezenne: "AZN" , source: "/ekskavator-yukleyici.png" },
    { id:3 , title: "Avtokran" , il: 2022 , qiymet_ay: 1000 , qiymet_gun: 100 ,mezenne: "AZN" , source: "/avtokran.png" },
    { id:4 , title: "Forkliftlər" , il: 2022 , qiymet_ay: 1000 , qiymet_gun: 100 ,mezenne: "AZN" , source: "/forklift-v2.png" }
]
export const descriptions:Idescriptions[] = [
    { id:1 , title: "Ekskavator" , il: 2022 , qiymet_ay: 1000 , qiymet_gun: 100 ,mezenne: "AZN" , source: "/ekskavator.png" },
    { id:2 , title: "Ekskavator yükləyici" , il: 2022 , qiymet_ay: 1000 , qiymet_gun: 100 ,mezenne: "AZN" , source: "/ekskavator-yukleyici.png" },
    { id:3 , title: "Avtokran" , il: 2022 , qiymet_ay: 1000 , qiymet_gun: 100 ,mezenne: "AZN" , source: "/avtokran.png" },
]
export const yenilik:Iyenilik[] = [
    { id:1 , basliq: "Lorem Ipsum is simply dummy" , info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." , tarix: "01.04.2022", source: "/texnika-1.png" },
    { id:2 , basliq: "Lorem Ipsum has been the industry's standard dummy text ever since" , info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." , tarix: "01.04.2022", source: "/texnika-2.png" },
    { id:3 , basliq: "Lorem Ipsum is simply dummy" , info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." , tarix: "01.04.2022", source: "/texnika-3.png" },
    { id:4 , basliq: "Lorem Ipsum is simply dummy" , info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." , tarix: "01.04.2022", source: "/texnika-4.png" }
]
export const xeberler:Ixeberler[] = [
    { id: 1 , to: "/xeber"  , basliq: "Xəbərin adı" , tarix: "12.04.2022" , source: "/xeber-1.png" },
    { id: 2 , to: "/xeber"  , basliq: "Xəbərin adı" , tarix: "12.04.2022" , source: "/xeber-2.png" },
    { id: 3 , to: "/xeber"  , basliq: "Xəbərin adı" , tarix: "12.04.2022" , source: "/xeber-3.png" },
    { id: 4 , to: "/xeber"  , basliq: "Xəbərin adı" , tarix: "12.04.2022" , source: "/xeber-4.png" },
    { id: 5 , to: "/xeber"  , basliq: "Xəbərin adı" , tarix: "12.04.2022" , source: "/xeber-1.png" },
    { id: 6 , to: "/xeber"  , basliq: "Xəbərin adı" , tarix: "12.04.2022" , source: "/xeber-2.png" },
    { id: 7 , to: "/xeber"  , basliq: "Xəbərin adı" , tarix: "12.04.2022" , source: "/xeber-3.png" },
    { id: 8 , to: "/xeber"  , basliq: "Xəbərin adı" , tarix: "12.04.2022" , source: "/xeber-4.png" },
]
export const xeber:Ixeber[] = [
    { id:1 , to: "/xeber" , basliq: "Xəbərin adı" , tarix: "12.04.2022" , melumat: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum " , source: "/xeber-1.png" },
]
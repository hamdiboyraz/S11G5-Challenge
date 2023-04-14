import project1 from "../assets/projects/order-pizza.png";
import project2 from "../assets/projects/calcwiz.png";
import project3 from "../assets/projects/movie-watchlist.png";

export const projects = {
  project1: {
    image: project1,
    name: "Order Pizza",
    text: {
      eng: "This React application is a simple platform where users can order pizza online. Users can choose a pizza from the menu, add extra toppings, customize their orders, and then complete their orders in their shopping carts.",
      tr: "Bu React uygulaması, kullanıcıların online pizza siparişi verebileceği basit bir platformdur. Kullanıcılar, menüden bir pizza seçebilir, ekstra malzemeler ekleyebilir, siparişlerini özelleştirebilir ve ardından sepetlerindeki siparişlerini tamamlayabilirler.",
    },
    tools: ["JavaScript", "React"],
    links: [
      "https://github.com/hamdiboyraz/S7G5-Challenge-Pizza",
      "https://orderpizza.netlify.app",
    ],
  },
  project2: {
    image: project2,
    name: "Calculator",
    text: {
      eng: "A simple calculator was developed using React and Reducer in this project. The calculator supports addition, subtraction, multiplication, and clear functions, and includes the ability to save and recall numbers in memory. Unlike basic calculators, this app adds the entire selected number rather than adding digits to the end of an existing number, making it a simplified and user-friendly option for quick calculations.",
      tr: "Bu projece React ve reducer kullanılarak basit bir hesap makinesi geliştirildi. Hesap makinesi, toplama, çıkarma, çarpma ve temizleme işlemlerini destekler ve sayıları hafızada kaydetme ve hatırlama özelliklerini içerir. Temel hesap makinelerinin aksine, bu uygulama, mevcut bir sayının sonuna rakam eklemek yerine seçilen tüm sayıları toplar, böylece hızlı hesaplamalar için basitleştirilmiş ve kullanıcı dostu bir seçenek sunar.",
    },
    tools: ["JavaScript", "React"],
    links: [
      "https://github.com/hamdiboyraz/S10G1-Reducer-Calculator",
      "https://calcwiz.netlify.app",
    ],
  },
  project3: {
    image: project3,
    name: "Movie WatchList",
    text: {
      eng: "In this project, I developed a web application where movies are displayed and can be added to a watchlist. The project was built using React and Redux.",
      tr: "Bu projede, filmlerin gösterildiği ve izleme listesine eklenebileceği bir web uygulaması geliştirdim. Projede React ve Redux kullanıldı.",
    },
    tools: ["JavaScript", "React", "Redux"],
    links: [
      "https://github.com/hamdiboyraz/S10G3-Redux-Watchlist",
      "https://moviewatchlist2023.netlify.app",
    ],
  },
};

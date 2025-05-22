import imgSalpicon from "../assets/BN-SALPICON.jpeg";

const emprendimientos = [
  {
    id: "1",
    name: "B & N - SALPICONES 🍉🍒🍍🥭",
    description: "Refresca tu día con deliciosos salpicones",
    horario: "Lunes a sábado, 6am - 6pm",
    address: "Calle 123, Leticia",
    imagenes: [
      // 👈 agregado
      imgSalpicon,
      "https://i.ytimg.com/vi/vUt09oKaTBM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7W8nWe9Gu67hKPc0I97DbBhIF7Q",
      "https://images.rappi.com/products/1714089194342_1714089183262_1714089181379.jpg",
    ],
    products: [
      { name: "Salpicón", price: 6000 },
      { name: "Salpicón Super Tropical", price: 10000 },
    ],
  },
];

export default emprendimientos;

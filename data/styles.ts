export type PhotoStyle = {
  id: string;
  name: string;
  frameAsset: any;
};

export const photoStyles: PhotoStyle[] = [
  {id: "retro", name: "Retro Cassette", frameAsset: require("../assets/frames/frame1.png")},
  {id: "holograma", name: "Holograma", frameAsset: require("../assets/frames/frame2.png")},
  {id: "robotico", name: "Robótico", frameAsset: require("../assets/frames/frame3.png")},
  {id: "playa", name: "Playa Tropical", frameAsset: require("../assets/frames/frame4.png")},
  {id: "espacial", name: "Espacial", frameAsset: require("../assets/frames/frame5.png")},
  {id: "selva", name: "Selva Jungla", frameAsset: require("../assets/frames/frame6.png")},
  {id: "grafiti", name: "Grafiti Urbano", frameAsset: require("../assets/frames/frame7.png")},
  {id: "kawaii", name: "Kawaii Anime", frameAsset: require("../assets/frames/frame8.png")},
  {id: "rock", name: "Rock Punk", frameAsset: require("../assets/frames/frame9.png")},
  {id: "cyberpunk", name: "Cyberpunk Neón", frameAsset: require("../assets/frames/frame10.png")},
  {id: "vintage", name: "Vintage Camera", frameAsset: require("../assets/frames/frame11.png")},
  {id: "boho", name: "Desierto Boho", frameAsset: require("../assets/frames/frame12.png")},
  {id: "invierno", name: "Invierno Nieve", frameAsset: require("../assets/frames/frame13.png")},
  {id: "circo", name: "Circo Carnaval", frameAsset: require("../assets/frames/frame14.png")},
  {id: "comic", name: "Comic Book", frameAsset: require("../assets/frames/frame15.png")},
  {id: "ororosa", name: "Oro Rosa Moderno", frameAsset: require("../assets/frames/frame16.png")},
  {id: "acuarela", name: "Acuarela", frameAsset: require("../assets/frames/frame17.png")},
  {id: "skate", name: "Skate Urbano", frameAsset: require("../assets/frames/frame18.png")},
  {id: "cafe", name: "Café Coffeeshop", frameAsset: require("../assets/frames/frame19.png")},
  {id: "trippy", name: "Galaxia Trippy", frameAsset: require("../assets/frames/frame20.png")},
  {id: "aura67", name: "67 Aura", frameAsset: require("../assets/frames/frame21.png")},
];
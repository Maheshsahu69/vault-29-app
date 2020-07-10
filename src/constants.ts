import birthday from './images/Images.xcassets/emoticon_birthday.imageset/Birthday.png';
import delicious from './images/Images.xcassets/emoticon_delicious.imageset/Delicious.png';
import love from './images/Images.xcassets/emoticon_heart.imageset/Love.png';
import wineShop from './images/Images.xcassets/emoticon_wine-shop.imageset/Wine Shop.png';
import cherry from './images/Images.xcassets/emoticon_cherry.imageset/Cherry.png';
import redGrapes from './images/Images.xcassets/emoticon_red-grapes.imageset/Red Grapes.png';
import cabernet from './images/Images.xcassets/emoticon_cabernet.imageset/Cabernet.png';
import redBottle from './images/Images.xcassets/emoticon_red-bottle.imageset/Red Bottle.png';
import chardonnay from './images/Images.xcassets/emoticon_chardonnay.imageset/Chardonnay.png'
import wineTesting from './images/Images.xcassets/emoticon_winetasting.imageset/Wine Tasting.png'
import twoThumbs from './images/Images.xcassets/emoticon_two-thumbs.imageset/Two Thumbs.png'


export const API_ENDPOINT = 'https://vault29-backend.innoventestech.in';

export enum AccountType {
  Email = 'Email',
  Facebook = 'Facebook'
}

export enum UserType {
  Consumer = 'Consumer',
  Winery = 'Winery',
  Other = 'Other'
}


export const imagesJSON = [
  {
    name: "emoticon_birthday",
    img: birthday,
    id: "1",
  },
  {
    name: "emoticon_delicious",
    img: delicious,
    id: "2",
  },
  {
    name: "emoticon_two-thumbs",
    img: twoThumbs,
    id: "3",
  },
  {
    name: "emoticon_heart",
    img: love,
    id: "4",
  },

  {
    name: "emoticon_red-grapes",
    img: redGrapes,
    id: "5",
  },
  {
    name: "moticon_wine-shop",
    img: wineShop,
    id: "6",
  },
  {
    name: "emoticon_cherry",
    img: cherry,
    id: "7",
  },
  {
    name: "emoticon_cabernet",
    img: cabernet,
    id: "8",
  },
  {
    name: "emoticon_red-bottle",
    img: redBottle,
    id: "9",
  },
  {
    name: "emoticon_chardonnay",
    img: chardonnay,
    id: "10",
  },
  {
    name: "emoticon_winetasting",
    img: wineTesting,
    id: "10",
  },
];


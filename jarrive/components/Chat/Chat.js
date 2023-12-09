import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import thomas from "../../assets/thomas.jpg";
import { View } from "react-native";
import thomasTrain from "../../assets/thomas_train.png";
import postaleImage from "../../assets/postcard_preview.jpg";

const messages = {
  salut: {
    variant: "text",
    content: "Salut? Quis est la?",
    translation: "Oi? Quem está aí?",
  },
  bonjourOuBonsoir: {
    variant: "choice",
    choices: ["bonjour", "bonsoir"],
    content: [
      {
        value: "bonjour ☀️?",
        translation: "bom dia",
      },
      { value: "ou" },
      {
        value: "bonsoir 🌙?",
        translation: "boa noite",
      },
    ],
  },
  bonjour: {
    variant: "text",
    content: [{ value: "Bonjour, alors!", translation: "Bom dia, então!" }],
  },
  bonsoir: {
    variant: "text",
    content: [{ value: "Bonsoir, alors!", translation: "Boa noite, então!" }],
  },
  thomasTrain: {
    variant: "image",
    src: thomasTrain,
  },
  jemapelle: {
    variant: "text",
    content: [
      { value: "Je m'appelle", translation: "Meu nome é" },
      { value: "Thomas, e você?" },
    ],
  },
  enchante: {
    variant: "text",
    content: [{ value: "Enchanté! 😽😽", translation: "Encantado! 😽😽" }],
  },
  humanOuChat: {
    variant: "choice",
    content: [
      { value: "Human", translation: "Humano" },
      { value: "ou" },
      { value: "chat?", translation: "gato" },
    ],
    choices: ["human 🖖🏻", "chat 😺"],
  },
  audio: {
    variant: "audio",
  },
  naoEntendeu: {
    variant: "text",
    content: [
      { value: "Você não entendeu?" },
      { value: "Alors", translation: "Então" },
      { value: ", je suis un chat, mas você não 😑" },
    ],
  },
  entregar: {
    variant: "text",
    content: [
      { value: "Além de chat, " },
      { value: "je suis", translation: "eu sou" },
      { value: "carteiro e preciso entregar isso aqui, me ajuda?" },
    ],
  },
  postaleImage: {
    variant: "image",
    src: postaleImage,
  },
  postaleChoice: {
    variant: "choice",
    content: [{ value: "Você sabe o que é isso?" }],
    choices: ["Train 🚂", "Croissant 🥐", "Carte Postale ✉️"],
  },
  cartePostaleChoice: {
    variant: "text",
    content: [
      { value: "Très bien!", translation: "Muito bem" },
      { value: "Une carte postale.", translation: "Um cartão postal." },
    ],
  },
  vamosLer: {
    variant: "choice",
    content: [{ value: "Vamos ler o que tá escrito? 😸😸" }],
    choices: ["Oui 👍", "Non 👎"],
  },
  recusouLer: {
    variant: "text",
    content: [
      { value: "Je suis" },
      { value: "curieux", translation: "curioso" },
      { value: "! 😹" },
    ],
  },
};

const Chat = () => {
  return (
    <View>
      <ChatHeader
        profileImage={thomas}
        name={"Issa - Le tuteur de Thomas"}
        status={"en écrivant..."}
      />

      <ChatBody />
      {/* <ChatInput /> */}
    </View>
  );
};

export default Chat;

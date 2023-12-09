import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import thomas from "../../assets/thomas.jpg";
import { View, Text, ImageBackground } from "react-native";
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
    content: "bonjour ☀️? ou bonsoir 🌙?",
    translation: {
      bonjour: "bom dia",
      bonsoir: "boa noite",
    },
  },
  bonjour: {
    variant: "text",
    content: "Bonjour, alors!",
    translation: "Bom dia, então!",
  },
  bonsoir: {
    variant: "text",
    content: "Bonsoir, alors!",
    translation: "Boa noite, então!",
  },
  thomasTrain: {
    variant: "image",
    src: thomasTrain,
  },
  jemapelle: {
    variant: "text",
    description: "Je m'appelle Thomas, e você?",
    translation: "Meu nome é",
  },
  enchante: {
    variant: "text",
    description: "Enchanté! 😽😽",
    translation: "Encantado",
  },
  humanOuChat: {
    variant: "choice",
    description: "Human ou chat?",
    choices: ["human 🖖🏻", "chat 😺"],
    translation: {
      human: "humano",
      chat: "gato",
    },
  },
  audio: {
    variant: "audio",
  },
  naoEntendeu: {
    variant: "text",
    content: "Você não entendeu? Alors, je suis un chat, mas você não 😑",
    translation: "Então",
  },
  entregar: {
    variant: "text",
    content:
      "Além de chat, je suis carteiro e preciso entregar isso aqui, me ajuda?",
    translation: "eu sou",
  },
  postaleImage: {
    variant: "image",
    src: postaleImage,
  },
  postaleChoice: {
    variant: "choice",
    content: "Você sabe o que é isso?",
    choices: ["Train 🚂", "Croissant 🥐", "Carte Postale ✉️"],
  },
  cartePostaleChoice: {
    variant: "text",
    content: "Très bien! Une carte postale.",
    translation: {
      tresBien: "Muito bem",
      uneCartePostale: "Um cartão postal.",
    },
  },
  vamosLer: {
    variant: "choice",
    content: "Vamos ler o que tá escrito? 😸😸",
    choices: ["Oui 👍", "Non 👎"],
  },
  recusouLer: {
    variant: "text",
    content: "Je suis curieux! 😹",
    translation: {
      curieux: "curioso",
    },
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

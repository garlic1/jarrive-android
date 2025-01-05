export const questions = [
  { id: 0, text1: "Je", text2: "un facteur. ✉️", correctAnswer: "suis" },
  { id: 1, text1: "Tu", text2: "mon copain. ❤️", correctAnswer: "es" },
  { id: 2, text1: "Elle", text2: "dans un train. 🚂", correctAnswer: "est" },
  { id: 3, text1: "Nous", text2: "en voyage. ✈️", correctAnswer: "sommes" },
];

export const answers = [
  { id: 2, text: "est" },
  { id: 0, text: "suis" },
  { id: 4, text: "sont" },
  { id: 1, text: "es" },
  { id: 3, text: "sommes" },
];

export const audios = [
  {
    id: 0,
    audio: require("../../assets/audios/je_suis_un_facteur.mp3"),
  },
  { id: 1, audio: require("../../assets/audios/tu_es_mon_copain.mp3") },
  {
    id: 2,
    audio: require("../../assets/audios/elle_est_dans_un_train.mp3"),
  },
  {
    id: 3,
    audio: require("../../assets/audios/nous_sommes_en_voyage.mp3"),
  },
  {
    id: 4,
    audio: require("../../assets/audios/on_ecoute_les_phrases.mp3"),
  },
];

export const CIRCLE_RADIUS = 30;

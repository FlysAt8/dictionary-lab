import { Dictionary } from "./dictionary";

const words = [
    "apple", "application", "apply", "appetite",
    "book", "booking", "booklet",
    "cat", "category", "car", "care", "card",
    "dog", "dolphin",
];

const dict = new Dictionary();
dict.addWords(words);

console.log("Проверка работы");
console.log("apple:      ", dict.contains("apple"));
console.log("APPLE:      ", dict.contains("APPLE"));
console.log("app:        ", dict.contains("app"));
console.log("dog:        ", dict.contains("dog"));
console.log("dolphin:    ", dict.contains("dolphin"));

console.log("\nЗамер памяти");

const totalChars = words.reduce((sum, w) => sum + w.length, 0);
const naiveMemory = totalChars;
const trieMemory = dict.nodeCount - 1;

console.log("Слов добавлено:           ", words.length);
console.log("Суммарно символов (N):    ", totalChars);
console.log("Узлов в Trie (M):         ", trieMemory);
console.log("Экономия:                 ", (100 - trieMemory / totalChars * 100).toFixed(1) + "%");
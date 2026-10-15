import { Trie } from "./trie";

export class Dictionary {
    private trie = new Trie();

    addWord(word: string): void {
        this.trie.addWord(word.toLowerCase());
    }

    addWords(words: string[]): void {
        for (const word of words) {
            this.addWord(word);
        }
    }

    contains(word: string): boolean {
        return this.trie.contains(word.toLowerCase());
    }

    get nodeCount(): number {
        return this.trie.size;
    }
}
class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEnd: boolean = false;
}

export class Trie {
    private root: TrieNode = new TrieNode();
    private nodeCount: number = 1;

    addWord(word: string): void {
        let current = this.root;

        for (const ch of word) {
            let next = current.children.get(ch);
            if (!next) {
                next = new TrieNode();
                current.children.set(ch, next);
                this.nodeCount++;
            }
            current = next;
        }

        current.isEnd = true;
    }

    contains(word: string): boolean {
        let current = this.root;

        for (const ch of word) {
            const next = current.children.get(ch);
            if (!next) return false;
            current = next;
        }

        return current.isEnd;
    }

    get size(): number {
        return this.nodeCount;
    }
}
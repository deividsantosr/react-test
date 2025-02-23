interface Character {
    id: number;
    name: string;
    images: string[];
    debut: {
        novel?: string;
        movie?: string;
        appearsIn: string;
    };
    jutsu: string[];
    personal: {
        species: string;
    };
    uniqueTraits: string[];
}

export default Character;
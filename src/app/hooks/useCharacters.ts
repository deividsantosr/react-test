import { useEffect, useState } from "react";
import CharacterData from "../models/CharacterData";
// import { People } from "../models/People";

export default () => {
    const uri: string = "https://narutodb.xyz";
    const endpoint: string = "/api/character";
    const query: string = "?page=1&limit=9";

    const [data, setData] = useState<CharacterData>();

    useEffect(() => {
        fetch(uri + endpoint + query)
            .then((res) => res.json())
            .then((data: CharacterData) => setData(data))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);

    return data;
}

export type Levels = 
    {
        title: string,
        color: string,
        icon: "down" | "up",
        imc: number[],
        yourimc?: number
}
export const levels: Levels[] = [
    {
        title: "Magreza",
        color: "#96A3AB",
        icon: "down",
        imc:[0, 18.5],
      
    },
    {
        title: "Normal",
        color: "#0EAD69",
        icon: "up",
        imc: [18.6, 24.9]
    },
    {
        title: "Sobrepeso",
        color: "#E2B039",
        icon: "down",
        imc: [25,30]
    },
    {
        title: "Obeso",
        color: "#C3423F",
        icon: "down",
        imc:[31, 99]
    }
];


export const calculateImc = (altura: number, peso: number) => {
    const imc = peso / (altura*altura)
    
    for (const level in levels) {
           
        if (imc >= levels[level].imc[0] && imc <= levels[level].imc[1]) {
            let lev: Levels = {...levels[level]}
            lev.yourimc = parseFloat(imc.toFixed(2));
         return lev
        }
    }
    return null
}
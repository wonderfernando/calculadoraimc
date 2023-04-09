import styles from "./components/App.module.css"; 
import image from './assets/imc.png';
import { ReactElement, useState } from "react";
import {calculateImc, Levels, levels} from "./helpers/imc";
import { GridItem } from "./components/GridItem";
import arrow from "./assets/arrow.png";
function App() {
 const [altura, setAltura] = useState<number>(0);
 const [peso, setPeso] = useState<number>(0);
 const [toThow, setToShow] = useState<Levels|null>(null);

 const handleClickCalcular = () => {
  if(altura != 0  && peso !=0){
     const level = calculateImc(altura,peso);
     setToShow(level);
  }else{
    alert("Digite todos os campos")
  }
}
const handleClickBack = () => {
  setAltura(0)
  setPeso(0)
  setToShow(null)
}



 
  return (
    <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img width="50px" src={image} alt=""/> Calculadora IMC
          </div>
        </header>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu IMC</h1>
            <p>IMC é a sigla para indice de Massa Corpórea, parâmetro adotado pela OMS</p>
            <input disabled={toThow ? true:false} type="number" placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={altura == 0 ? "" : altura}
             onChange={e=>setAltura(parseFloat(e.target.value))}
            />
             <input disabled={toThow ? true:false} type="number" placeholder="Digite o seu peso. Ex: 65.5 (em kg)"
            value={peso == 0 ? "" : peso}
             onChange={e=>setPeso(parseFloat(e.target.value))}
            />
            <button  disabled={toThow ? true:false} onClick={handleClickCalcular}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
             {!toThow && <div className={styles.grid}>
                  {
                    levels.map(level => 
                    <GridItem key={level.title} item={level}/>
                    )
                  }
              </div>
              }
              {
                toThow && <div className={styles.rightBig}>
                    <div className={styles.rightArrow} onClick={handleClickBack} > <img src={arrow} alt=""/> </div>
                    <GridItem item={toThow}/>
                </div>
              }
          </div>
        </div>
    </div>
  )
}

export default App

import styles from "./buttonscontainer.module.css";
const ButtonsContainer =({onButtonClick}) => {

    const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','=','9','0','.',]
   return <div className={styles.buttonsContainer}>
    {buttonNames.map((buttonNames) => (<button className={styles.button} onClick={()=> onButtonClick(buttonNames)}>{buttonNames}</button>))}


  </div>

}
export default ButtonsContainer;
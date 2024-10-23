function triangleBtn() {
  const bBox = getParameter("b-box");
  const hBox = getParameter("h-box");
  const equation = 0.5 * bBox * hBox;

  setParameter("your-answer", equation);
  console.log(equation);
}
function rectangleBtn(){
    const wBox = getParameter('w-box');
    const iBox = getParameter('i-box');
    const equation= wBox*iBox;
    setParameter('rectangle-answer',equation)


}
function parallelogramBtn(){
    const b2Box = getParameter('b2-box');
    const h2Box = getParameter('h2-box');
    const equation= b2Box*h2Box;
    setParameter('parallelogram-answer',equation);
}
function rhombusBtn(){
    const d1Box = getParameter('d1-box');
    const d2Box = getParameter('d2-box');
    const equation= 0.5*d1Box*d2Box;
    setParameter('rhombus-answer',equation);
    
}
function pentagonBtn(){
    const p1Box = getParameter('p-box');
    const b3Box = getParameter('b3-box');
    const equation= 0.5*p1Box*b3Box;
    setParameter('pentagon-answer',equation);

}

function getParameter(writtenElement) {
  const element = document.getElementById(writtenElement);
  const elementvalue = element.value;
  const elementInNumber = parseFloat(elementvalue);
  return elementInNumber;
}
function setParameter(writtenParameter, equation) {
  const element = document.getElementById(writtenParameter);
  element.innerText = equation;
}


export const customPopup = (message) => {
  const para = document.createElement("p");
  para.setAttribute("id", "customPopupMessage");
  para.setAttribute("class", "customMessageClass");
  const node = document.createTextNode(`${message}`);
  para.appendChild(node);

  const element = document.getElementsByTagName('body')[0]
  element.appendChild(para);

  let elems = document.querySelectorAll(".customMessageClass");
  for (const e of elems) {
    setTimeout(
      function (o) {
        //2. Receive the element in variable o
        o.remove(); //3. Remove the o variable
      },
      5000,
      e
    );
  }
};

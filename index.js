function reverseInputText() {
  const inputText = document.getElementById("inputText").value;
  const inputTextArray = inputText.split(/\n/);
  let tmp = "";
  let n = 1;
  inputTextArray.forEach((e) => {
    tmp += "<p>" + "(" + n + ")" + e + "</p>";
    n++;
  });
  document.getElementById("outputText").innerHTML = tmp;
}

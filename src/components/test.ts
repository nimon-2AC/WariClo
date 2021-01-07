function test(): void {
  const p = document.createElement("p");
  const text = document.createTextNode("ほげ");
  document.body.appendChild(p).appendChild(text);
}

export { test };

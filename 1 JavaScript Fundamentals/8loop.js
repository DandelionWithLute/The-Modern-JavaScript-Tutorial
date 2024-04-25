i = 15;
while (i) {
  i--;
  console.log(i);
  if (i == 1) {
    i -= 2;// inf
  }
  if (i == -11111111111111111) break;// inf
}

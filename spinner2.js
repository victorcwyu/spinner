let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let timer = 0;
for (let i = 0; i < arr.length; i ++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, timer);
  timer += 200;
}
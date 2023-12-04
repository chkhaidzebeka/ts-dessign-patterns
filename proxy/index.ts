import { ExecProxy } from "./execProxy";

ExecProxy.exec("ls", (error, stdout) => {
  if (error) return console.error(error);
  console.log(stdout);
});

ExecProxy.exec("cat /etc/passwd", (error, stdout) => {
  if (error) return console.error(error);
  console.log(stdout);
});

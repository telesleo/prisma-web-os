export default interface CommandInvokation {
  key: string;
  args: string[];
  options: { [key: string]: string };
}

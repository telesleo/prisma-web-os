export default interface Terminal {
  write: (text: string) => void;
  clear: () => void;
}

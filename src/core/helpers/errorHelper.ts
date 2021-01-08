export class CustomError extends Error {
  public code: string;
  public text: string;
  constructor(code: string, text: string) {
    super();
    this.code = code;
    this.text = text;
  }
}

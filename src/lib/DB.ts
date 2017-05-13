class DB {
  getHelloMessage(): Promise<String> {
    return Promise.resolve("Hello Lambda");
  }
}

export default DB;
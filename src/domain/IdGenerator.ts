function* IdGenerator(startId = 0) {
  for (let id = startId; ; id++) {
    yield id;
  }
}

export default IdGenerator;

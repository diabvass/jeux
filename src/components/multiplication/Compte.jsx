export const questions = () => {
  let m = Math.floor(Math.random() * 9) + 1;
  let n = Math.floor(Math.random() * 9) + 1;
  let p1 = m * n;

  let p2, p3;

  // p2 toujours positif et différent de p1
  do {
    p2 = p1 + Math.floor(Math.random() * 10) + 1
  } while (p2 === p1);

  // p3 différent de p1 et p2
  do {
    p3 = Math.max(1, p1 - Math.floor(Math.random() * 10) - 1)
  } while (p3 === p1 || p3 === p2);

  return new Question(m, n, p1, p2, p3);
};

class Question {
  constructor(m, n, p1, p2, p3) {
    this.m = m;
    this.n = n;
    this.reponse = p1;
    this.choix = [p1, p2, p3].sort(() => Math.random() - 0.5);
  }
}
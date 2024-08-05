//Question 58
//Write a simple program that can take lots of scores
//  and find theif average.

function findAverage(...scores: number[]): number {
  //Adds all scores togarher and divides by the number of length
  let total = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return total;
}
//Example: finding the average of 6 scores
console.log(findAverage(91, 93, 87, 78, 66, 45, 90));

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
 var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  const states = Math.floor(minutesToTest / minutesToDie) + 1;
  const pigs = Math.ceil(Math.log(buckets) / Math.log(states));
  return pigs;
};
const buckets = 1000, minutesToDie = 15, minutesToTest = 60
console.log(poorPigs(buckets, minutesToDie, minutesToTest))
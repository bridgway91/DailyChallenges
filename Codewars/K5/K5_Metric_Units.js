// Scientists working internationally use metric units almost exclusively. Unless that is, they wish to crash multimillion dollars worth of equipment on Mars.
// Your task is to write a simple function that takes a number of meters, and outputs it using metric prefixes.
// In practice, meters are only measured in "mm" (thousandths of a meter), "cm" (hundredths of a meter), "m" (meters) and "km" (kilometers, or clicks for the US military).
// For this exercise we just want units bigger than a meter, from meters up to yottameters, excluding decameters and hectometers.

// All values passed in will be positive integers. e.g.
// 999 --> "999m"
// 123456 --> "123.456km"
// 12300000 --> "12.3Mm"

// List of Metric Prefixes
// Unit	Symbol	Base 10	Value
// yotta	Y	10^24	1 000 000 000 000 000 000 000 000
// zetta	Z	10^21	1 000 000 000 000 000 000 000
// exa	E	10^18	1 000 000 000 000 000 000
// peta	P	10^15	1 000 000 000 000 000
// tera	T	10^12	1 000 000 000 000
// giga	G	10^9	1 000 000 000
// mega	M	10^6	1 000 000
// kilo	k	10^3	1 000
// -	-	10^0	1
// See https://en.wikipedia.org/wiki/Metric_prefix for a full list of prefixes


function meters(m) { // another surprisingly easy one considering length of instructions
  const units = [
    { prefix: 'Y', value: 1e24 },
    { prefix: 'Z', value: 1e21 },
    { prefix: 'E', value: 1e18 },
    { prefix: 'P', value: 1e15 },
    { prefix: 'T', value: 1e12 },
    { prefix: 'G', value: 1e9 },
    { prefix: 'M', value: 1e6 },
    { prefix: 'k', value: 1e3 },
  ];

  for (let { prefix, value } of units) {
    if (m >= value) {
      return `${m / value}${prefix}m`;
    }
  }

  return `${m}m`;
}

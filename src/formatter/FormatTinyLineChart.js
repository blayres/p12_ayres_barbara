/**
 * return formatted data of user's average sessions (per day)
 * @param   {array} days               Days of the week
 * @param   {number} sessionLength     Session length 
 * @return  {array}                    Formatted data
 */

export function FormatTinyLineChart(data) {
  const dataChart = [];
  const days = ["L", "M", "M", "J", "V", "S", "D"]
  data.map((donne) => {
    const donneFormated = {
      day: days[donne.day - 1],
      sessionLength : donne.sessionLength
    }

    dataChart.push(donneFormated)
    })
    return dataChart;
}
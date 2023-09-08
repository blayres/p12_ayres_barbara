/**
 * return the formatted calorie and weight data
 * @param   {number} calories  Calories of the User
 * @param   {number} poids     Weight of the User
 * @return  {array}            Formatted data
 */

export function FormatSimpleBarChart(data) {
    const dataChart = [];
    data.map((donne, day) => {
      const donneFormated = {
        name: day +1,
        Calories: donne.calories,
        Poids: donne.kilogram,
      }
  
      dataChart.push(donneFormated)
    })
    return dataChart;
}

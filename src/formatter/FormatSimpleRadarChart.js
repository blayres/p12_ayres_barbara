/**
 * return formatted data of user's score performance
 * @param   {array} kind       Kind of nutritional information
 * @param   {number} value     Value of performance
 * @return  {object}           Formatted data
 */

export function FormatSimpleRadarChart(data) {
    const kind = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];
    const dataChart = [];
    data.data.map((donne) => {
      const donneFormated = {
        subject: kind[donne.kind - 1],
        value: donne.value,
        kind: donne.kind,
      }
  
      dataChart.push(donneFormated)
    })
    return dataChart;
}
/**
 * return formatted data of user's score performance
 * @param   {array} kind       Kind of nutritional information
 * @param   {number} value     Value of performance
 * @return  {object}           Formatted data
 */

export function FormatSimpleRadarChart(data) {
    const kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
    const dataChart = [];
    data.data.map((donne, index) => {
      const donneFormated = {
        subject: kind[donne.kind - 1],
        value: donne.value,
        kind: donne.kind,
      }
  
      dataChart.push(donneFormated)
    })
    return dataChart;
}
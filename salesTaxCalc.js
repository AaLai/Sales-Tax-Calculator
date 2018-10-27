var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  },
  // {
  //   name: "doody",
  //   province: "BC",
  //   sales: [ 999, 9999 ]
  // },
  // {
  //   name: "DerpFactory",
  //   province: "AB",
  //   sales: [ 1245, 66, 3, 674, 777, 231, 9564 ]
  // },
  // {
  //   name: "DerpFactory",
  //   province: "BC",
  //   sales: [ 1337, 80085, 8483, 855 ]
  // }
];

function isCompanyNameInFinalResults (finalResultLocation, salesDataLocation) {
  return finalResultLocation[salesDataLocation]
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

// make an empty results object
  var finalResults = {};

// add company names to the array (based on salesData input?)
// add total sales and total tax under company name
  salesData.forEach((num) => {
    if (!isCompanyNameInFinalResults(finalResults, num.name)) {
      finalResults[num.name] = { totalSales : calculateSales(num),
                                 totalTaxes : calculateTaxes(num, taxRates)}
    } else {
      finalResults[num.name].totalSales = calculateSales(num) + finalResults[num.name].totalSales
      finalResults[num.name].totalTaxes = calculateTaxes(num, taxRates) + finalResults[num.name].totalTaxes
      // console.log(finalResults)
    }
  })
// make a loop that calculates individual sales for each area
  function calculateSales (location) {
    var result = 0;
    location.sales.forEach((element) => {
      result += element;
    })
    return result;
  }
// calculate tax for those sales
  function calculateTaxes (location, taxRates) {
    if (Object.keys(taxRates).indexOf(location.province) !== -1 ) {
      return Math.round(calculateSales(location) * taxRates[location.province])
    }
  }
// return the object
  return finalResults;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}

*/
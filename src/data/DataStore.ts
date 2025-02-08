
import dataset from "../data/dataset.json";  

interface DataRow
{
    year:number;
    cropname:string;
    production:number;

}

export interface ChartData
{
    cropName:string;
    averageProduction:number;
}

export interface TableData
{
    year:number;
    maxProductionCropName:string;
    minProductionCropName:string;
}

export function getTableData(): TableData[]{

    const result:TableData[] = [];

    const data = getData();




    result.push({year:1950, maxProductionCropName:"Wheat", minProductionCropName:"Rice"});
    result.push({year:1950, maxProductionCropName:"Maize", minProductionCropName:"Wheat"});
    result.push({year:1950, maxProductionCropName:"Barley", minProductionCropName:"Rice"});
    result.push({year:1950, maxProductionCropName:"Rice", minProductionCropName:"Maize"});
    result.push({year:1951, maxProductionCropName:"Maize", minProductionCropName:"Rice"});
    result.push({year:1951, maxProductionCropName:"Barley", minProductionCropName:"Maize"});
    result.push({year:1951, maxProductionCropName:"Wheat", minProductionCropName:"Barley"});
    result.push({year:1951, maxProductionCropName:"Barley", minProductionCropName:"Rice"});
    result.push({year:1952, maxProductionCropName:"Barley", minProductionCropName:"Rice"});
    result.push({year:1952, maxProductionCropName:"Wheat", minProductionCropName:"Barley"});
    result.push({year:1952, maxProductionCropName:"Maize", minProductionCropName:"Rice"});
    result.push({year:1952, maxProductionCropName:"Barley", minProductionCropName:"Rice"});

    

    
    



    return result;

}


export function getAverageProduction(): ChartData[]{

const productionMap: Record<string, { total: number; count: number }> = {};

const data = getData();

console.log(data);

  data.forEach((item ) => {
    if (!productionMap[item.cropname]) {
      productionMap[item.cropname] = { total: 0, count: 0 };
    }
    productionMap[item.cropname].total += item.production;
    productionMap[item.cropname].count += 1;
  });

  return Object.entries(productionMap).map(([cropName, { total, count }]) => ({
    cropName,
    averageProduction: total / count,
  }));
  
}

export function getData(): DataRow[] {
    
    const data = dataset.Data;
    const result:DataRow[]=[];

    data.forEach( (element) => {
        result.push({year: element.year, cropname: element.cropName, production:element.production});
    });
   

    return result;
  }
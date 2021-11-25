import * as csvtojson from "csvtojson";
import patientColumns from "../constants/patientColumns"
import IPatient from "../dataModels/IPatient";

class CsvUtil {
  public static async convertCsvToJson(csvFile: string): Promise<IPatient[]> {
    const results = await csvtojson().fromFile(csvFile);
    
    // Remove the header for simplicity
    results.splice(0 , 1);
    
    const rows = [];
    for (const result of results) {
      const columnValues = Object.values(result).join("").split(":");
      const extractedValues = columnValues.join('').split('|');
      const row = CsvUtil.mapToJson(extractedValues);
      rows.push(row);
    }
    return rows as IPatient[];
  }

  public static mapToJson(values: string[]): IPatient {
    const rowObj = {};
    let index = 0;
    if (values.length !== patientColumns.length)
      throw new Error("csv column count mismatch");
    for (const column of patientColumns) {
      rowObj[column] = values[index];
      index++;
    }
    return rowObj as any;
  }
}

export default CsvUtil;

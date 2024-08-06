import { CreateTable, CreateTableOptions } from "./create-table.use-case";

describe("CreateTableUseCase", () => {
  test("Should create a table with default values", () => {
    const defaultFlags: CreateTableOptions = {
      base: 7,
    };

    const createTable = new CreateTable();

    const table = createTable.execute(defaultFlags);
    const rows = table.split("\n");

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("7 x 1 = 7");
    expect(table).toContain("7 x 9 = 63");
    expect(rows).toHaveLength(12);
  });

  test("Should create table with custom values", () => {
    const defaultFlags: CreateTableOptions = {
      base: 5,
      limit: 6,
    };

    const createTable = new CreateTable();

    const table = createTable.execute(defaultFlags);
    const rows = table.split("\n");

    expect(table).toContain("5 x 1 = 5");
    expect(table).toContain("5 x 6 = 30");
    expect(rows).toHaveLength(8);
  });
});

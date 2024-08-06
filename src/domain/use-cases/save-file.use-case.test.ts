import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("SaveFileUseCase", () => {
  afterAll(() => {
    fs.rmSync("outputs", { recursive: true });
    fs.rmSync("custom-outputs", { recursive: true });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should save file with default value", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt";
    const options = {
      fileContent: "test content",
    };

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test("should save file with custom values", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "custom content",
      destination: "custom-outputs",
      fileName: "custom-table-name",
    };
    const filePath = `${options.destination}/${options.fileName}.txt`;

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test("should return false if directory could not be created", () => {
    const options = {
      fileContent: "custom content",
      destination: "custom-outputs",
      fileName: "custom-table-name",
    };

    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("error");
    });

    const result = saveFile.execute(options);

    expect(mkdirSpy).toHaveBeenCalled();
    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });

  test("should return false if file could not be created", () => {
    const options = {
      fileContent: "custom content",
      destination: "custom-outputs",
      fileName: "custom-table-name",
    };

    const saveFile = new SaveFile();
    const writeFileSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("error");
      });

    const result = saveFile.execute(options);

    expect(writeFileSpy).toHaveBeenCalled();
    expect(result).toBe(false);

    writeFileSpy.mockRestore();
  });
});

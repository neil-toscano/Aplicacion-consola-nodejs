// import { yarg } from './args.plugin';

const runComman = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("./args.plugin");
  return yarg;
};
describe("Args test plugin", () => {
  const originalArgv = process.argv;
  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });
  test("should return default values", async () => {
    const argv = await runComman(["-b", "5"]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "table",
        d: "outputs/",
      }),
    );
  });

  test("should return configuration with custom values", async () => {
    const argv = await runComman([
      "-b",
      "5",
      "-l",
      "12",
      "-s",
      "true",
      "-n",
      "multiplication-table",
      "-d",
      "output-table/",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 12,
        s: true,
        n: "multiplication-table",
        d: "output-table/",
      }),
    );
  });
});

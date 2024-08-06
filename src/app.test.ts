import { ServerApp } from "./presentation/server-app";

describe("App.ts", () => {
  test("Should call server", async() => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;

    process.argv = ['node', 'app.ts', '-b', '10', '-l', '12'];
    await import('./app');

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 10,
      limit: 12,
      destination: 'outputs/',
      nameTable: 'table',
      showTable: false,
    })
  });
});

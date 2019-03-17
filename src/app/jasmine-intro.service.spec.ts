import { JasmineIntroService } from "./jasmine-intro.service";

describe("JasmineIntroService", () => {
  let result;
  let service: JasmineIntroService;
  beforeAll(() => {
    console.log("beforeAll");
  });

  beforeEach(() => {
    service = new JasmineIntroService();
    console.log("beforeEach");
  });

  it("should add two numbers", () => {
    result = service.addNumber(1, 2);
    expect(result).toEqual(3);
  });

  it("should subtract two numbers", () => {
    result = service.subtractNumber(1, 2);
    expect(result).toEqual(-1);
  });

  it("應該乘以兩個數", () => {
    result = service.multiplicationtNumber(1, 2);
    expect(result).toEqual(2);
  });

  it("應該除以兩個數", () => {
    result = service.divideNumber(1, 2);
    expect(result).toEqual(0.5);
  });

  afterEach(() => {
    console.log("afterEach");
  });

  afterAll(() => {
    console.log("afterAll");
  });
});
